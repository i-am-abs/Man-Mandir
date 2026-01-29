import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Slider,
  StatusBar,
  useColorScheme,
  Dimensions,
} from 'react-native';
import Sound from 'react-native-sound';
import LinearGradient from 'react-native-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, AudioItem } from '../types';
import { COLORS } from '../constants/audioData';
import { IconResolver } from '../components/Icons';

const { width } = Dimensions.get('window');

Sound.setCategory('Playback');

type PlayerScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Player'
>;
type PlayerScreenRouteProp = RouteProp<RootStackParamList, 'Player'>;

interface Props {
  navigation: PlayerScreenNavigationProp;
  route: PlayerScreenRouteProp;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  addToHistory: (id: string) => void;
}

export const PlayerScreen: React.FC<Props> = ({
  navigation,
  route,
  favorites,
  toggleFavorite,
  addToHistory,
}) => {
  const { playlist, initialIndex } = route.params;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const soundRef = useRef<Sound | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const theme = isDark ? COLORS.dark : COLORS.light;

  const currentItem = playlist[currentIndex];
  const isFav = favorites.includes(currentItem.id);

  useEffect(() => {
    loadSound();
    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.release();
      }
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [currentIndex]);

  const loadSound = () => {
    // Clean up previous sound
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.release();
    }
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    const sound = new Sound(currentItem.audioSrc, (error) => {
      if (error) {
        console.error('Failed to load sound', error);
        return;
      }

      setDuration(sound.getDuration());
      sound.setVolume(isMuted ? 0 : volume);

      // Auto-play
      sound.play((success) => {
        if (success) {
          handleNext();
        }
      });

      setIsPlaying(true);
      addToHistory(currentItem.id);

      // Update progress
      progressInterval.current = setInterval(() => {
        sound.getCurrentTime((seconds) => {
          setProgress(seconds);
        });
      }, 100);
    });

    soundRef.current = sound;
  };

  const togglePlayPause = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
    } else {
      soundRef.current.play((success) => {
        if (success) {
          handleNext();
        }
      });
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : playlist.length - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < playlist.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
  };

  const handleSeek = (value: number) => {
    if (!soundRef.current) return;
    soundRef.current.setCurrentTime(value);
    setProgress(value);
  };

  const toggleMute = () => {
    if (!soundRef.current) return;
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    soundRef.current.setVolume(newMuted ? 0 : volume);
  };

  const handleVolumeChange = (value: number) => {
    if (!soundRef.current) return;
    setVolume(value);
    if (!isMuted) {
      soundRef.current.setVolume(value);
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <LinearGradient
      colors={isDark
        ? ['#0A0A0A', '#1C1C1C', '#2C2C2C']
        : ['#FFFFFF', '#F5F5F5', '#E8E8E8']
      }
      style={styles.container}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.headerButton, { backgroundColor: isDark ? '#2C2C2C' : '#F0F0F0' }]}
          onPress={() => navigation.goBack()}
        >
          <IconResolver name="chevron-left" size={24} color={theme.text} />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: theme.text }]}>Now Playing</Text>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => toggleFavorite(currentItem.id)}
        >
          <IconResolver
            name="heart"
            size={24}
            color={isFav ? '#EF4444' : theme.textSecondary}
          />
        </TouchableOpacity>
      </View>

      {/* Album Art */}
      <View style={styles.artworkContainer}>
        <View style={styles.artworkWrapper}>
          <Image
            source={{ uri: `https://loremflickr.com/400/400/${currentItem.imageKeywords.split(',')[0]},god/all?lock=${currentItem.id}` }}
            style={styles.artwork}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.3)']}
            style={styles.artworkGradient}
          />
        </View>
      </View>

      {/* Track Info */}
      <View style={styles.trackInfo}>
        <Text style={[styles.trackTitle, { color: theme.text }]} numberOfLines={1}>
          {currentItem.title}
        </Text>
        <Text style={[styles.trackArtist, { color: COLORS.saffron.default }]}>
          {currentItem.deity}
        </Text>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Slider
          style={styles.slider}
          value={progress}
          minimumValue={0}
          maximumValue={duration}
          onSlidingComplete={handleSeek}
          minimumTrackTintColor={COLORS.saffron.default}
          maximumTrackTintColor={isDark ? '#2C2C2C' : '#E0E0E0'}
          thumbTintColor={COLORS.saffron.default}
        />
        <View style={styles.timeContainer}>
          <Text style={[styles.timeText, { color: theme.textSecondary }]}>
            {formatTime(progress)}
          </Text>
          <Text style={[styles.timeText, { color: theme.textSecondary }]}>
            {formatTime(duration)}
          </Text>
        </View>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.controlButton, styles.smallButton]}
          onPress={handlePrev}
        >
          <IconResolver name="skip-back" size={28} color={theme.text} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.playButton, { backgroundColor: COLORS.saffron.default }]}
          onPress={togglePlayPause}
        >
          <IconResolver
            name={isPlaying ? 'pause' : 'play'}
            size={36}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.smallButton]}
          onPress={handleNext}
        >
          <IconResolver name="skip-forward" size={28} color={theme.text} />
        </TouchableOpacity>
      </View>

      {/* Volume Control */}
      <View style={styles.volumeContainer}>
        <TouchableOpacity onPress={toggleMute}>
          <IconResolver
            name={isMuted ? 'volume-mute' : 'volume-high'}
            size={20}
            color={theme.textSecondary}
          />
        </TouchableOpacity>
        <Slider
          style={styles.volumeSlider}
          value={isMuted ? 0 : volume}
          minimumValue={0}
          maximumValue={1}
          onValueChange={handleVolumeChange}
          minimumTrackTintColor={COLORS.saffron.default}
          maximumTrackTintColor={isDark ? '#2C2C2C' : '#E0E0E0'}
          thumbTintColor={COLORS.saffron.default}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  artworkContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 32,
  },
  artworkWrapper: {
    width: width * 0.75,
    height: width * 0.75,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 12,
  },
  artwork: {
    width: '100%',
    height: '100%',
  },
  artworkGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  trackInfo: {
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 24,
  },
  trackTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  trackArtist: {
    fontSize: 16,
    fontWeight: '500',
  },
  progressContainer: {
    paddingHorizontal: 40,
    marginBottom: 24,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -8,
  },
  timeText: {
    fontSize: 12,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 40,
  },
  controlButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallButton: {
    width: 56,
    height: 56,
  },
  playButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginHorizontal: 24,
    shadowColor: COLORS.saffron.default,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  volumeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  volumeSlider: {
    flex: 1,
    marginLeft: 12,
    height: 40,
  },
});
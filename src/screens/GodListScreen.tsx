import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, AudioItem } from '../types';
import { GOD_AUDIO_LIST, COLORS } from '../constants/audioData';
import { IconResolver } from '../components/Icons';

type GodListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GodList'
>;
type GodListScreenRouteProp = RouteProp<RootStackParamList, 'GodList'>;

interface Props {
  navigation: GodListScreenNavigationProp;
  route: GodListScreenRouteProp;
  favorites: string[];
  history: string[];
  toggleFavorite: (id: string) => void;
}

type TabType = 'all' | 'favorites' | 'history';

export const GodListScreen: React.FC<Props> = ({
  navigation,
  route,
  favorites,
  history,
  toggleFavorite,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const theme = isDark ? COLORS.dark : COLORS.light;

  const getFilteredList = (): AudioItem[] => {
    if (activeTab === 'favorites') {
      return GOD_AUDIO_LIST.filter((item) => favorites.includes(item.id));
    }
    if (activeTab === 'history') {
      const reversedHistory = [...history].reverse();
      const uniqueHistoryIds = Array.from(new Set(reversedHistory));
      return uniqueHistoryIds
        .map((id) => GOD_AUDIO_LIST.find((item) => item.id === id))
        .filter(Boolean) as AudioItem[];
    }
    return GOD_AUDIO_LIST;
  };

  const filteredList = getFilteredList();

  const handlePlay = (item: AudioItem) => {
    const index = filteredList.findIndex((i) => i.id === item.id);
    navigation.navigate('Player', {
      playlist: filteredList,
      initialIndex: index,
    });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.surface}
      />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <View style={styles.headerTop}>
          <TouchableOpacity
            style={[styles.backButton, { backgroundColor: isDark ? '#2C2C2C' : '#F5F5F5' }]}
            onPress={() => navigation.goBack()}
          >
            <IconResolver name="chevron-left" size={24} color={theme.text} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: COLORS.saffron.default }]}>
            Divine Chants
          </Text>
        </View>

        {/* Tabs */}
        <View style={[styles.tabContainer, { backgroundColor: isDark ? '#2C2C2C' : '#F0F0F0' }]}>
          {(['all', 'favorites', 'history'] as TabType[]).map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
                activeTab === tab && { backgroundColor: theme.surface },
              ]}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.7}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab
                    ? { color: COLORS.saffron.default }
                    : { color: theme.textSecondary },
                ]}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* List */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredList.length === 0 ? (
          <View style={styles.emptyContainer}>
            <IconResolver
              name={activeTab === 'favorites' ? 'heart' : 'history'}
              size={48}
              color={theme.textSecondary}
            />
            <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
              No {activeTab} yet.
            </Text>
          </View>
        ) : (
          filteredList.map((item) => {
            const isFav = favorites.includes(item.id);
            return (
              <TouchableOpacity
                key={item.id}
                style={[styles.audioCard, {
                  backgroundColor: isDark ? 'rgba(28, 28, 28, 0.5)' : '#F9F9F9',
                  borderColor: theme.border,
                }]}
                onPress={() => handlePlay(item)}
                activeOpacity={0.7}
              >
                <View style={styles.thumbnail}>
                  <Image
                    source={{ uri: `https://loremflickr.com/150/150/${item.imageKeywords.split(',')[0]},god/all?lock=${item.id}` }}
                    style={styles.thumbnailImage}
                    resizeMode="cover"
                  />
                  <View style={styles.thumbnailOverlay} />
                </View>

                <View style={styles.audioInfo}>
                  <Text style={[styles.audioTitle, { color: theme.text }]} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={[styles.audioDeity, { color: COLORS.saffron.default }]}>
                    {item.deity}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.favoriteButton}
                  onPress={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <IconResolver
                    name="heart"
                    size={20}
                    color={isFav ? '#EF4444' : theme.textSecondary}
                  />
                  {isFav && (
                    <View style={styles.heartFill}>
                      <IconResolver name="heart" size={20} color="#EF4444" />
                    </View>
                  )}
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 48,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    opacity: 0.6,
  },
  emptyText: {
    marginTop: 16,
    fontSize: 14,
  },
  audioCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  thumbnail: {
    width: 64,
    height: 64,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
  },
  thumbnailOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  audioInfo: {
    flex: 1,
    marginRight: 8,
  },
  audioTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  audioDeity: {
    fontSize: 13,
  },
  favoriteButton: {
    padding: 8,
    position: 'relative',
  },
  heartFill: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
});
import React, { useState, useEffect, useRef } from 'react';
import { ScreenName, AudioItem } from './types';
import { MODULES, GOD_AUDIO_LIST, QUOTES } from './constants';
import { Layout } from './components/Layout';
import { IconResolver } from './components/Icons';

// --- Types & Constants for App ---
const STORAGE_KEY_FAVS = 'man_mandir_favs';
const STORAGE_KEY_HISTORY = 'man_mandir_history';
const STORAGE_KEY_USER = 'man_mandir_user';
const STORAGE_KEY_THEME = 'man_mandir_theme';

// --- Sub-components (Views) ---

// 1. Splash Screen
const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-b from-saffron-500 to-maroon-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] opacity-10"></div>
      <div className="z-10 flex flex-col items-center animate-fade-in">
        <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 ring-4 ring-gold-400 shadow-[0_0_40px_rgba(255,215,0,0.5)]">
          <span className="text-6xl">ॐ</span>
        </div>
        <h1 className="text-4xl font-serif font-bold tracking-wider mb-2 text-shadow-sm">MAN MANDIR</h1>
        <p className="text-gold-200 text-sm tracking-[0.2em] uppercase">Faith • Tech • Devotion</p>
      </div>
      <div className="absolute bottom-10 text-center px-6 animate-pulse-slow">
        <p className="text-white/80 font-serif italic">"{QUOTES[0]}"</p>
      </div>
    </div>
  );
};

// 2. Settings Screen
interface SettingsScreenProps {
  onBack: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  userName: string;
  setUserName: (name: string) => void;
  clearHistory: () => void;
  clearFavorites: () => void;
}

const SettingsScreen = ({ onBack, isDarkMode, toggleTheme, userName, setUserName, clearHistory, clearFavorites }: SettingsScreenProps) => {
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState(userName);

  const handleSaveName = () => {
    if (tempName.trim()) {
      setUserName(tempName.trim());
    } else {
      setTempName(userName);
    }
    setEditingName(false);
  };

  return (
    <div className="h-full flex flex-col bg-white dark:bg-stone-900 transition-colors duration-300">
      <div className="bg-white dark:bg-stone-900 p-4 pt-12 border-b border-stone-100 dark:border-stone-800 shadow-sm shrink-0 flex items-center gap-4 z-10">
        <button onClick={onBack} className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300">
          <IconResolver name="Back" />
        </button>
        <h2 className="text-xl font-serif font-bold text-stone-800 dark:text-stone-100">Settings</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        
        {/* Profile Section */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-saffron-600 dark:text-saffron-500">Profile</h3>
          <div className="bg-stone-50 dark:bg-stone-800 rounded-xl p-4 flex items-center justify-between border border-stone-100 dark:border-stone-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-saffron-100 text-saffron-600 flex items-center justify-center">
                <IconResolver name="User" className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-400">Your Name</p>
                {editingName ? (
                  <input 
                    type="text" 
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    onBlur={handleSaveName}
                    onKeyDown={(e) => e.key === 'Enter' && handleSaveName()}
                    autoFocus
                    className="bg-white dark:bg-stone-900 border border-saffron-300 rounded px-2 py-0.5 text-stone-800 dark:text-stone-100 text-sm outline-none"
                  />
                ) : (
                  <p className="font-medium text-stone-800 dark:text-stone-100">{userName}</p>
                )}
              </div>
            </div>
            <button 
              onClick={() => editingName ? handleSaveName() : setEditingName(true)}
              className="p-2 text-stone-400 hover:text-saffron-500 transition-colors"
            >
              <IconResolver name={editingName ? "Check" : "Edit"} className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Display Section */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-saffron-600 dark:text-saffron-500">Appearance</h3>
          <div 
            onClick={toggleTheme}
            className="bg-stone-50 dark:bg-stone-800 rounded-xl p-4 flex items-center justify-between border border-stone-100 dark:border-stone-700 cursor-pointer active:scale-[0.99] transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <IconResolver name={isDarkMode ? "Moon" : "Sun"} className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-stone-800 dark:text-stone-100">App Theme</p>
                <p className="text-xs text-stone-400">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
              </div>
            </div>
            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${isDarkMode ? 'bg-saffron-500' : 'bg-stone-300'}`}>
              <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </div>
          </div>
        </section>

        {/* Data Section */}
        <section className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-saffron-600 dark:text-saffron-500">Data</h3>
          <button 
            onClick={() => { if(window.confirm('Clear all favorites?')) clearFavorites(); }}
            className="w-full bg-stone-50 dark:bg-stone-800 rounded-xl p-4 flex items-center justify-between border border-stone-100 dark:border-stone-700 active:scale-[0.99] transition-transform group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center">
                <IconResolver name="Heart" className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-medium text-stone-800 dark:text-stone-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Clear Favorites</p>
                <p className="text-xs text-stone-400">Remove all bookmarked audios</p>
              </div>
            </div>
            <IconResolver name="Trash" className="w-4 h-4 text-stone-300 group-hover:text-red-500" />
          </button>

          <button 
            onClick={() => { if(window.confirm('Clear play history?')) clearHistory(); }}
            className="w-full bg-stone-50 dark:bg-stone-800 rounded-xl p-4 flex items-center justify-between border border-stone-100 dark:border-stone-700 active:scale-[0.99] transition-transform group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                <IconResolver name="History" className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-medium text-stone-800 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">Clear History</p>
                <p className="text-xs text-stone-400">Remove list of recently played</p>
              </div>
            </div>
            <IconResolver name="Trash" className="w-4 h-4 text-stone-300 group-hover:text-orange-500" />
          </button>
        </section>

        {/* About */}
        <div className="pt-8 text-center">
          <p className="text-xs text-stone-400">Man Mandir v1.0.0</p>
          <p className="text-[10px] text-stone-300 mt-1">Made with Devotion</p>
        </div>
      </div>
    </div>
  );
};

// 3. Home Screen (Updated)
interface HomeScreenProps {
  onNavigate: (screen: ScreenName, params?: any) => void;
  userName: string;
}

const HomeScreen = ({ onNavigate, userName }: HomeScreenProps) => {
  return (
    <div className="h-full flex flex-col bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-saffron-500 text-white px-6 pt-12 pb-8 rounded-b-[2.5rem] shadow-lg relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] opacity-10"></div>
        
        {/* Top Controls */}
        <div className="relative z-10 flex justify-end mb-4">
          <button 
            onClick={() => onNavigate(ScreenName.SETTINGS)}
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 backdrop-blur-sm transition-colors"
            aria-label="Settings"
          >
            <IconResolver name="Settings" className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="relative z-10 flex justify-between items-end">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 h-8">
              <span className="text-saffron-100 text-sm font-medium">Namaste,</span>
              <span className="text-white font-bold px-1">{userName}</span>
            </div>
            <h2 className="text-3xl font-serif font-bold leading-tight">Welcome to<br/>Man Mandir</h2>
          </div>
          <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-inner">
            <span className="text-2xl">🕉️</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
        <div className="grid grid-cols-2 gap-4 pb-20">
          {MODULES.map((module) => (
            <button
              key={module.id}
              onClick={() => onNavigate(module.status === 'ACTIVE' ? (module.screen || ScreenName.HOME) : ScreenName.COMING_SOON, { title: module.title })}
              className={`aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-all transform active:scale-95 shadow-sm border border-stone-100 dark:border-stone-800
                ${module.status === 'ACTIVE' 
                  ? 'bg-white dark:bg-stone-800 hover:shadow-md hover:border-saffron-400 dark:hover:border-saffron-500' 
                  : 'bg-stone-100 dark:bg-stone-800/50 opacity-70 grayscale'}`}
            >
              <div className={`p-3 rounded-full ${module.status === 'ACTIVE' ? 'bg-saffron-100 text-saffron-600 dark:bg-saffron-900/30 dark:text-saffron-400' : 'bg-stone-200 text-stone-400 dark:bg-stone-700'}`}>
                <IconResolver name={module.iconName} className="w-8 h-8" />
              </div>
              <span className={`font-medium ${module.status === 'ACTIVE' ? 'text-stone-800 dark:text-stone-100' : 'text-stone-400'}`}>
                {module.title}
              </span>
              {module.status === 'COMING_SOON' && (
                <span className="text-[10px] uppercase font-bold tracking-wider text-white bg-stone-400 px-2 py-0.5 rounded-full">
                  Soon
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// 4. God Screen (List)
interface GodListScreenProps {
  onNavigate: (screen: ScreenName, params?: any) => void;
  onBack: () => void;
  favorites: string[];
  history: string[];
  toggleFavorite: (id: string) => void;
}

const GodListScreen = ({ onNavigate, onBack, favorites, history, toggleFavorite }: GodListScreenProps) => {
  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'history'>('all');

  const getFilteredList = () => {
    if (activeTab === 'favorites') {
      return GOD_AUDIO_LIST.filter(item => favorites.includes(item.id));
    }
    if (activeTab === 'history') {
      const reversedHistory = [...history].reverse();
      const uniqueHistoryIds = Array.from(new Set(reversedHistory));
      return uniqueHistoryIds.map(id => GOD_AUDIO_LIST.find(item => item.id === id)).filter(Boolean) as AudioItem[];
    }
    return GOD_AUDIO_LIST;
  };

  const filteredList = getFilteredList();

  const handlePlay = (item: AudioItem) => {
    const index = filteredList.findIndex(i => i.id === item.id);
    onNavigate(ScreenName.PLAYER, { playlist: filteredList, initialIndex: index });
  };

  return (
    <div className="h-full flex flex-col bg-white dark:bg-stone-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-stone-900 p-4 pt-12 border-b border-stone-100 dark:border-stone-800 shadow-sm shrink-0 z-10">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={onBack} className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300">
            <IconResolver name="Back" />
          </button>
          <h2 className="text-xl font-serif font-bold text-saffron-600 dark:text-saffron-500">Divine Chants</h2>
        </div>
        
        {/* Tabs */}
        <div className="flex p-1 bg-stone-100 dark:bg-stone-800 rounded-xl">
          {(['all', 'favorites', 'history'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-sm font-bold rounded-lg capitalize transition-all ${
                activeTab === tab 
                  ? 'bg-white dark:bg-stone-700 text-saffron-600 dark:text-saffron-400 shadow-sm' 
                  : 'text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">
        {filteredList.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-stone-400 space-y-2 opacity-60">
            <IconResolver name={activeTab === 'favorites' ? 'Heart' : 'History'} className="w-12 h-12" />
            <p>No {activeTab} yet.</p>
          </div>
        ) : (
          filteredList.map((item) => {
            const isFav = favorites.includes(item.id);
            return (
              <div 
                key={item.id}
                onClick={() => handlePlay(item)}
                className="group flex items-center gap-4 p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800 hover:border-saffron-300 dark:hover:border-saffron-700 transition-all cursor-pointer active:scale-[0.98]"
              >
                <div className="w-16 h-16 rounded-lg bg-stone-200 dark:bg-stone-700 overflow-hidden shrink-0 relative">
                   <img 
                    src={`https://loremflickr.com/150/150/${item.imageKeywords.split(',')[0]},god/all?lock=${item.id}`} 
                    alt={item.deity}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  /> 
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-stone-800 dark:text-stone-100 truncate">{item.title}</h3>
                  <p className="text-sm text-saffron-600 dark:text-saffron-400">{item.deity}</p>
                </div>

                <div className="flex items-center gap-2">
                   <button 
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(item.id); }}
                    className={`p-2 rounded-full transition-colors ${isFav ? 'text-red-500' : 'text-stone-300 dark:text-stone-600 hover:text-red-400'}`}
                   >
                     <IconResolver name="Heart" className={`w-5 h-5 ${isFav ? 'fill-current' : ''}`} />
                   </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

// 5. Player Screen (with Visualizer and Volume)
interface PlayerScreenProps {
  playlist: AudioItem[];
  initialIndex: number;
  onBack: () => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  addToHistory: (id: string) => void;
  isDarkMode: boolean;
}

const PlayerScreen = ({ playlist, initialIndex, onBack, favorites, toggleFavorite, addToHistory, isDarkMode }: PlayerScreenProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  
  // Volume state
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationRef = useRef<number>(0);

  const item = playlist[currentIndex];
  const isFav = favorites.includes(item.id);

  // Initialize Audio & Visualizer
  useEffect(() => {
    // Cleanup previous audio if exists
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(item.audioSrc);
    audio.crossOrigin = "anonymous"; // Important for CORS if using external audio
    audio.volume = isMuted ? 0 : volume; // Set initial volume
    audioRef.current = audio;

    const setAudioData = () => setDuration(audio.duration);
    const updateProgress = () => setProgress(audio.currentTime);
    const onEnd = () => handleNext();

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', onEnd);

    // Audio Context Setup
    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        audioContextRef.current = new AudioContextClass();
      }
    }

    // Auto play
    audio.play()
      .then(() => {
        setIsPlaying(true);
        addToHistory(item.id);
        setupMediaSession();
        // Resume context if suspended (browser policy)
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume();
        }
        setupVisualizer();
      })
      .catch(e => console.log("Autoplay blocked or AudioContext error", e));

    return () => {
      cancelAnimationFrame(animationRef.current);
      audio.pause();
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', onEnd);
      // Clean up Media Element Source if necessary
      if (sourceRef.current) {
        sourceRef.current.disconnect();
        sourceRef.current = null;
      }
      if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = null;
      }
    };
  }, [currentIndex]); // Re-run when current index changes

  // Update volume on state change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const setupVisualizer = () => {
    const actx = audioContextRef.current;
    if (!actx || !audioRef.current || !canvasRef.current) return;

    try {
      // Connect nodes only if not already connected for this specific audio element
      // Since we create `new Audio()` each time, we need a new source
      if (sourceRef.current) {
         sourceRef.current.disconnect();
      }
      
      const analyser = actx.createAnalyser();
      analyser.fftSize = 64; // Small size for fewer, wider bars
      analyserRef.current = analyser;

      const source = actx.createMediaElementSource(audioRef.current);
      sourceRef.current = source;
      source.connect(analyser);
      analyser.connect(actx.destination);
      
      drawVisualizer();
    } catch (e) {
      console.error("Visualizer setup failed (likely CORS):", e);
    }
  };

  const drawVisualizer = () => {
    if (!canvasRef.current || !analyserRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    analyserRef.current.getByteFrequencyData(dataArray);
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const barWidth = (canvas.width / bufferLength) * 2;
    let barHeight;
    let x = 0;
    
    for(let i = 0; i < bufferLength; i++) {
        // Simple visualization: mirrored bars at the bottom
        barHeight = (dataArray[i] / 255) * canvas.height * 0.5; // Scale to half height max
        
        ctx.fillStyle = isDarkMode ? '#FFB05C' : '#FFD700'; // Saffron/Gold
        
        // Draw bottom-up
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);
        
        x += barWidth;
    }
    
    animationRef.current = requestAnimationFrame(drawVisualizer);
  };

  // Setup Media Session API
  const setupMediaSession = () => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: item.title,
        artist: item.deity,
        album: 'Man Mandir',
        artwork: [
          { src: `https://loremflickr.com/512/512/${item.imageKeywords.split(',')[0]},hindu/all?lock=${item.id}`, sizes: '512x512', type: 'image/jpeg' }
        ]
      });

      navigator.mediaSession.setActionHandler('play', () => {
        audioRef.current?.play();
        setIsPlaying(true);
      });
      navigator.mediaSession.setActionHandler('pause', () => {
        audioRef.current?.pause();
        setIsPlaying(false);
      });
      navigator.mediaSession.setActionHandler('previoustrack', handlePrev
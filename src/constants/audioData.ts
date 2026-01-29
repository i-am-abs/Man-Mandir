import { AudioItem, ModuleItem, ScreenName } from '../types';

// IMPORTANT: Update these paths to match your actual audio files
// Place your audio files in: src/assets/audio/
// Then update the require paths below

export const GOD_AUDIO_LIST: AudioItem[] = [
{
id: '1',
title: 'Hanuman Chalisa',
deity: 'Hanuman',
imageKeywords: 'hanuman,hindu,god,strength',
durationString: '09:45',
// Update this path to your actual audio file
audioSrc: require('../assets/audio/hanuman_chalisa.mp3'),
  },
  {
    id: '2',
    title: 'Hanuman Aarti',
    deity: 'Hanuman',
    imageKeywords: 'hanuman,bajrangbali,aarti',
    durationString: '05:30',
    audioSrc: require('../assets/audio/hanuman_aarti.mp3'),
  },
  {
    id: '3',
    title: 'Vishnu Sahasranamam',
    deity: 'Vishnu',
    imageKeywords: 'vishnu,narayan,preserver',
    durationString: '20:15',
    audioSrc: require('../assets/audio/vishnu_sahasranamam.mp3'),
  },
  {
    id: '4',
    title: 'Ganesh Aarti',
    deity: 'Ganesh',
    imageKeywords: 'ganesha,ganpati,elephant',
    durationString: '03:45',
    audioSrc: require('../assets/audio/ganesh_aarti.mp3'),
  },
  {
    id: '5',
    title: 'Gayatri Mantra',
    deity: 'Goddess Gayatri',
    imageKeywords: 'gayatri,devi,saraswati',
    durationString: '10:00',
    audioSrc: require('../assets/audio/gayatri_mantra.mp3'),
  },
];

export const MODULES: ModuleItem[] = [
  { id: 'god', title: 'God', iconName: 'om', status: 'ACTIVE', screen: ScreenName.GOD_LIST },
  { id: 'priest', title: 'Priest', iconName: 'user', status: 'COMING_SOON' },
  { id: 'temples', title: 'Temples', iconName: 'bank', status: 'COMING_SOON' },
  { id: 'notifications', title: 'Updates', iconName: 'bell', status: 'COMING_SOON' },
  { id: 'ganga', title: 'Ganga', iconName: 'droplet', status: 'COMING_SOON' },
  { id: 'pilgrimage', title: 'Yatra', iconName: 'map', status: 'COMING_SOON' },
  { id: 'gaushala', title: 'Gau Shala', iconName: 'coffee', status: 'COMING_SOON' },
];

export const QUOTES = [
  "Dharmo Rakshati Rakshitah",
  "Vasudhaiva Kutumbakam",
  "Satyameva Jayate",
  "Yogah Karmasu Kaushalam"
];

// Color constants for consistent theming
export const COLORS = {
  saffron: {
    light: '#FFB05C',
    default: '#FF9933',
    dark: '#E0852A',
  },
  maroon: {
    light: '#A0522D',
    default: '#800000',
    dark: '#5C0000',
  },
  gold: {
    light: '#FFD700',
    default: '#D4AF37',
    dark: '#B8860B',
  },
  // Light theme
  light: {
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#2C2C2C',
    textSecondary: '#666666',
    border: '#E0E0E0',
  },
  // Dark theme
  dark: {
    background: '#0A0A0A',
    surface: '#1C1C1C',
    text: '#F5F5F5',
    textSecondary: '#A0A0A0',
    border: '#2C2C2C',
  },
};

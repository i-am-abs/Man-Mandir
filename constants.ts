import { AudioItem, ModuleItem, ScreenName } from './types';

// NOTE: In a real build, replace the `audioSrc` with local paths like require('./assets/audio/hanuman_chalisa.mp3')
// For this demo, we use a placeholder audio service to ensure functionality without broken local links.
const PLACEHOLDER_AUDIO = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export const GOD_AUDIO_LIST: AudioItem[] = [
  {
    id: '1',
    title: 'Hanuman Chalisa',
    deity: 'Hanuman',
    imageKeywords: 'hanuman,hindu,god,strength',
    durationString: '09:45',
    audioSrc: PLACEHOLDER_AUDIO, 
  },
  {
    id: '2',
    title: 'Hanuman Aarti',
    deity: 'Hanuman',
    imageKeywords: 'hanuman,bajrangbali,aarti',
    durationString: '05:30',
    audioSrc: PLACEHOLDER_AUDIO,
  },
  {
    id: '3',
    title: 'Vishnu Sahasranamam',
    deity: 'Vishnu',
    imageKeywords: 'vishnu,narayan,preserver',
    durationString: '20:15',
    audioSrc: PLACEHOLDER_AUDIO,
  },
  {
    id: '4',
    title: 'Ganesh Aarti',
    deity: 'Ganesh',
    imageKeywords: 'ganesha,ganpati,elephant',
    durationString: '03:45',
    audioSrc: PLACEHOLDER_AUDIO,
  },
  {
    id: '5',
    title: 'Gayatri Mantra',
    deity: 'Goddess Gayatri',
    imageKeywords: 'gayatri,devi,saraswati',
    durationString: '10:00',
    audioSrc: PLACEHOLDER_AUDIO,
  },
];

export const MODULES: ModuleItem[] = [
  { id: 'god', title: 'God', iconName: 'Om', status: 'ACTIVE', screen: ScreenName.GOD_LIST },
  { id: 'priest', title: 'Priest', iconName: 'User', status: 'COMING_SOON' },
  { id: 'temples', title: 'Temples', iconName: 'Landmark', status: 'COMING_SOON' },
  { id: 'notifications', title: 'Updates', iconName: 'Bell', status: 'COMING_SOON' },
  { id: 'ganga', title: 'Ganga', iconName: 'Droplets', status: 'COMING_SOON' },
  { id: 'pilgrimage', title: 'Yatra', iconName: 'Map', status: 'COMING_SOON' },
  { id: 'gaushala', title: 'Gau Shala', iconName: 'Milk', status: 'COMING_SOON' },
];

export const QUOTES = [
  "Dharmo Rakshati Rakshitah",
  "Vasudhaiva Kutumbakam",
  "Satyameva Jayate",
  "Yogah Karmasu Kaushalam"
];
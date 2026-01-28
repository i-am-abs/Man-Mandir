export enum ScreenName {
  SPLASH = 'SPLASH',
  HOME = 'HOME',
  GOD_LIST = 'GOD_LIST',
  PLAYER = 'PLAYER',
  COMING_SOON = 'COMING_SOON',
  SETTINGS = 'SETTINGS'
}

export interface AudioItem {
  id: string;
  title: string;
  deity: string;
  imageKeywords: string;
  durationString: string; // Placeholder duration
  audioSrc: string; // Path to local file or URL
}

export interface ModuleItem {
  id: string;
  title: string;
  iconName: string;
  status: 'ACTIVE' | 'COMING_SOON';
  screen?: ScreenName;
}

export interface PlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  isLooping: boolean;
}
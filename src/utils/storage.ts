import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEYS = {
FAVORITES: 'man_mandir_favs',
HISTORY: 'man_mandir_history',
USER: 'man_mandir_user',
THEME: 'man_mandir_theme',
};

export const StorageService = {
// Get favorites
getFavorites: async (): Promise<string[]> => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading favorites:', error);
      return [];
    }
  },

  // Save favorites
  saveFavorites: async (favorites: string[]): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  },

  // Get history
  getHistory: async (): Promise<string[]> => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEYS.HISTORY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading history:', error);
      return [];
    }
  },

  // Save history
  saveHistory: async (history: string[]): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    } catch (error) {
      console.error('Error saving history:', error);
    }
  },

  // Get user name
  getUserName: async (): Promise<string> => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEYS.USER);
      return name || 'Devotee';
    } catch (error) {
      console.error('Error loading user name:', error);
      return 'Devotee';
    }
  },

  // Save user name
  saveUserName: async (name: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.USER, name);
    } catch (error) {
      console.error('Error saving user name:', error);
    }
  },

  // Get theme
  getTheme: async (): Promise<'light' | 'dark'> => {
    try {
      const theme = await AsyncStorage.getItem(STORAGE_KEYS.THEME);
      return (theme as 'light' | 'dark') || 'light';
    } catch (error) {
      console.error('Error loading theme:', error);
      return 'light';
    }
  },

  // Save theme
  saveTheme: async (theme: 'light' | 'dark'): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  },

  // Clear all data
  clearAllData: async (): Promise<void> => {
    try {
      await AsyncStorage.multiRemove([
        STORAGE_KEYS.FAVORITES,
        STORAGE_KEYS.HISTORY,
      ]);
    } catch (error) {
      console.error('Error clearing data:', error);
    }
  },
};

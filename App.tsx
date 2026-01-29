import React, { useState, useEffect } from 'react';
import { SafeAreaView, useColorScheme, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { AppNavigator } from './src/navigation/AppNavigator';
import { StorageService } from './src/utils/storage';

const App = () => {
  const systemColorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);
  
  // User state
  const [userName, setUserName] = useState('Devotee');
  
  // Audio state
  const [favorites, setFavorites] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  // Load data on mount
  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      const [loadedName, loadedFavorites, loadedHistory, loadedTheme] =
        await Promise.all([
          StorageService.getUserName(),
          StorageService.getFavorites(),
          StorageService.getHistory(),
          StorageService.getTheme(),
        ]);

      setUserName(loadedName);
      setFavorites(loadedFavorites);
      setHistory(loadedHistory);
      setIsDarkMode(loadedTheme === 'dark');
    } catch (error) {
      console.error('Error loading initial data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Save user name
  const handleSetUserName = async (name: string) => {
    setUserName(name);
    await StorageService.saveUserName(name);
  };

  // Toggle favorite
  const toggleFavorite = async (id: string) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    
    setFavorites(newFavorites);
    await StorageService.saveFavorites(newFavorites);
  };

  // Add to history
  const addToHistory = async (id: string) => {
    const newHistory = [id, ...history.filter((historyId) => historyId !== id)];
    setHistory(newHistory);
    await StorageService.saveHistory(newHistory);
  };

  // Clear history
  const clearHistory = async () => {
    setHistory([]);
    await StorageService.saveHistory([]);
  };

  // Clear favorites
  const clearFavorites = async () => {
    setFavorites([]);
    await StorageService.saveFavorites([]);
  };

  // Toggle theme
  const toggleTheme = async () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    await StorageService.saveTheme(newTheme);
  };

  if (isLoading) {
    return null; // Or a loading screen
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator
        userName={userName}
        setUserName={handleSetUserName}
        favorites={favorites}
        history={history}
        toggleFavorite={toggleFavorite}
        addToHistory={addToHistory}
        clearHistory={clearHistory}
        clearFavorites={clearFavorites}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

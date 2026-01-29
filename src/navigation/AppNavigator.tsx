import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

// Screens
import { SplashScreen } from '../screens/SplashScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { GodListScreen } from '../screens/GodListScreen';
import { PlayerScreen } from '../screens/PlayerScreen';
import { ComingSoonScreen } from '../screens/ComingSoonScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Stack = createStackNavigator<RootStackParamList>();

interface AppNavigatorProps {
  userName: string;
  setUserName: (name: string) => void;
  favorites: string[];
  history: string[];
  toggleFavorite: (id: string) => void;
  addToHistory: (id: string) => void;
  clearHistory: () => void;
  clearFavorites: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const AppNavigator: React.FC<AppNavigatorProps> = ({
  userName,
  setUserName,
  favorites,
  history,
  toggleFavorite,
  addToHistory,
  clearHistory,
  clearFavorites,
  isDarkMode,
  toggleTheme,
}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        initialRouteName="Splash"
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
        />

        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} userName={userName} />}
        </Stack.Screen>

        <Stack.Screen name="GodList">
          {(props) => (
            <GodListScreen
              {...props}
              favorites={favorites}
              history={history}
              toggleFavorite={toggleFavorite}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Player"
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        >
          {(props) => (
            <PlayerScreen
              {...props}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              addToHistory={addToHistory}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="ComingSoon">
          {(props) => <ComingSoonScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Settings">
          {(props) => (
            <SettingsScreen
              {...props}
              userName={userName}
              setUserName={setUserName}
              clearHistory={clearHistory}
              clearFavorites={clearFavorites}
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

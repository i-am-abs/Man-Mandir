import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  StatusBar,
  Switch,
  useColorScheme,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { COLORS } from '../constants/audioData';
import { IconResolver } from '../components/Icons';

type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;

interface Props {
  navigation: SettingsScreenNavigationProp;
  userName: string;
  setUserName: (name: string) => void;
  clearHistory: () => void;
  clearFavorites: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const SettingsScreen: React.FC<Props> = ({
  navigation,
  userName,
  setUserName,
  clearHistory,
  clearFavorites,
  isDarkMode,
  toggleTheme,
}) => {
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState(userName);

  const colorScheme = useColorScheme();
  const theme = isDarkMode ? COLORS.dark : COLORS.light;

  const handleSaveName = () => {
    if (tempName.trim()) {
      setUserName(tempName.trim());
    } else {
      setTempName(userName);
    }
    setEditingName(false);
  };

  const handleClearFavorites = () => {
    Alert.alert(
      'Clear Favorites',
      'Are you sure you want to clear all favorites?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: clearFavorites,
        },
      ]
    );
  };

  const handleClearHistory = () => {
    Alert.alert(
      'Clear History',
      'Are you sure you want to clear play history?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: clearHistory,
        },
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.surface}
      />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.surface, borderBottomColor: theme.border }]}>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: isDarkMode ? '#2C2C2C' : '#F5F5F5' }]}
          onPress={() => navigation.goBack()}
        >
          <IconResolver name="chevron-left" size={24} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: COLORS.saffron.default }]}>
            PROFILE
          </Text>
          <View style={[styles.card, { backgroundColor: isDarkMode ? 'rgba(28, 28, 28, 0.5)' : '#F9F9F9', borderColor: theme.border }]}>
            <View style={styles.iconCircle}>
              <IconResolver name="user" size={20} color={COLORS.saffron.default} />
            </View>
            <View style={styles.cardContent}>
              <Text style={[styles.cardLabel, { color: theme.textSecondary }]}>
                Your Name
              </Text>
              {editingName ? (
                <TextInput
                  style={[styles.input, {
                    backgroundColor: theme.surface,
                    borderColor: COLORS.saffron.default,
                    color: theme.text,
                  }]}
                  value={tempName}
                  onChangeText={setTempName}
                  onBlur={handleSaveName}
                  autoFocus
                  returnKeyType="done"
                  onSubmitEditing={handleSaveName}
                />
              ) : (
                <Text style={[styles.cardValue, { color: theme.text }]}>
                  {userName}
                </Text>
              )}
            </View>
            <TouchableOpacity
              onPress={() => (editingName ? handleSaveName() : setEditingName(true))}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <IconResolver
                name={editingName ? 'check' : 'edit'}
                size={16}
                color={theme.textSecondary}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: COLORS.saffron.default }]}>
            APPEARANCE
          </Text>
          <TouchableOpacity
            style={[styles.card, { backgroundColor: isDarkMode ? 'rgba(28, 28, 28, 0.5)' : '#F9F9F9', borderColor: theme.border }]}
            onPress={toggleTheme}
            activeOpacity={0.7}
          >
            <View style={[styles.iconCircle, { backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)' }]}>
              <IconResolver
                name={isDarkMode ? 'moon' : 'sun'}
                size={20}
                color={isDarkMode ? '#818CF8' : '#6366F1'}
              />
            </View>
            <View style={styles.cardContent}>
              <Text style={[styles.cardValue, { color: theme.text }]}>
                App Theme
              </Text>
              <Text style={[styles.cardLabel, { color: theme.textSecondary }]}>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{ false: '#D1D5DB', true: COLORS.saffron.default }}
              thumbColor="#FFFFFF"
            />
          </TouchableOpacity>
        </View>

        {/* Data Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: COLORS.saffron.default }]}>
            DATA
          </Text>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: isDarkMode ? 'rgba(28, 28, 28, 0.5)' : '#F9F9F9', borderColor: theme.border }]}
            onPress={handleClearFavorites}
            activeOpacity={0.7}
          >
            <View style={[styles.iconCircle, { backgroundColor: 'rgba(239, 68, 68, 0.1)' }]}>
              <IconResolver name="heart" size={20} color="#EF4444" />
            </View>
            <View style={styles.cardContent}>
              <Text style={[styles.cardValue, { color: theme.text }]}>
                Clear Favorites
              </Text>
              <Text style={[styles.cardLabel, { color: theme.textSecondary }]}>
                Remove all bookmarked audios
              </Text>
            </View>
            <IconResolver name="trash" size={16} color={theme.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, { backgroundColor: isDarkMode ? 'rgba(28, 28, 28, 0.5)' : '#F9F9F9', borderColor: theme.border }]}
            onPress={handleClearHistory}
            activeOpacity={0.7}
          >
            <View style={[styles.iconCircle, { backgroundColor: 'rgba(251, 146, 60, 0.1)' }]}>
              <IconResolver name="history" size={20} color="#FB923C" />
            </View>
            <View style={styles.cardContent}>
              <Text style={[styles.cardValue, { color: theme.text }]}>
                Clear History
              </Text>
              <Text style={[styles.cardLabel, { color: theme.textSecondary }]}>
                Remove list of recently played
              </Text>
            </View>
            <IconResolver name="trash" size={16} color={theme.textSecondary} />
          </TouchableOpacity>
        </View>

        {/* About */}
        <View style={styles.aboutContainer}>
          <Text style={[styles.version, { color: theme.textSecondary }]}>
            Man Mandir v1.0.0
          </Text>
          <Text style={[styles.madeWith, { color: theme.textSecondary }]}>
            Made with Devotion
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 80,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 153, 51, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 11,
    marginBottom: 2,
  },
  cardValue: {
    fontSize: 15,
    fontWeight: '600',
  },
  input: {
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1,
  },
  aboutContainer: {
    alignItems: 'center',
    paddingTop: 32,
  },
  version: {
    fontSize: 11,
    marginBottom: 4,
  },
  madeWith: {
    fontSize: 9,
  },
});
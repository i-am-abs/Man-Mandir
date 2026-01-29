import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ScreenName } from '../types';
import { MODULES, COLORS } from '../constants/audioData';
import { IconResolver } from '../components/Icons';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
  userName: string;
}

export const HomeScreen: React.FC<Props> = ({ navigation, userName }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleModulePress = (module: typeof MODULES[0]) => {
    if (module.status === 'ACTIVE') {
      if (module.screen === ScreenName.GOD_LIST) {
        navigation.navigate('GodList', { title: module.title });
      }
    } else {
      navigation.navigate('ComingSoon', { title: module.title });
    }
  };

  const theme = isDark ? COLORS.dark : COLORS.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS.saffron.default}
      />

      {/* Header */}
      <LinearGradient
        colors={[COLORS.saffron.default, COLORS.saffron.dark]}
        style={styles.header}
      >
        <View style={styles.headerTop}>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <IconResolver name="settings" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.headerContent}>
          <View style={styles.headerTextContainer}>
            <View style={styles.greetingRow}>
              <Text style={styles.namaste}>Namaste,</Text>
              <Text style={styles.userName}>{userName}</Text>
            </View>
            <Text style={styles.welcomeText}>
              Welcome to{'\n'}Man Mandir
            </Text>
          </View>

          <View style={styles.omContainer}>
            <Text style={styles.omEmoji}>🕉️</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Modules Grid */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.gridContainer}>
          {MODULES.map((module) => (
            <TouchableOpacity
              key={module.id}
              style={[
                styles.moduleCard,
                {
                  backgroundColor: module.status === 'ACTIVE'
                    ? theme.surface
                    : isDark
                      ? 'rgba(28, 28, 28, 0.5)'
                      : '#F0F0F0',
                  borderColor: module.status === 'ACTIVE'
                    ? isDark ? '#2C2C2C' : '#E0E0E0'
                    : 'transparent',
                },
                module.status !== 'ACTIVE' && styles.comingSoonCard,
              ]}
              onPress={() => handleModulePress(module)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: module.status === 'ACTIVE'
                      ? isDark
                        ? 'rgba(255, 153, 51, 0.15)'
                        : 'rgba(255, 153, 51, 0.1)'
                      : isDark
                        ? '#2C2C2C'
                        : '#D0D0D0',
                  },
                ]}
              >
                <IconResolver
                  name={module.iconName}
                  size={32}
                  color={
                    module.status === 'ACTIVE'
                      ? COLORS.saffron.default
                      : '#999999'
                  }
                />
              </View>

              <Text
                style={[
                  styles.moduleTitle,
                  {
                    color: module.status === 'ACTIVE'
                      ? theme.text
                      : '#999999',
                  },
                ]}
              >
                {module.title}
              </Text>

              {module.status === 'COMING_SOON' && (
                <View style={styles.comingSoonBadge}>
                  <Text style={styles.comingSoonText}>SOON</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
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
    paddingTop: 48,
    paddingBottom: 32,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerTextContainer: {
    flex: 1,
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    height: 32,
  },
  namaste: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginRight: 8,
  },
  userName: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 34,
  },
  omContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  omEmoji: {
    fontSize: 28,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 80,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  moduleCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  comingSoonCard: {
    opacity: 0.7,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  moduleTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  comingSoonBadge: {
    position: 'absolute',
    bottom: 12,
    backgroundColor: '#999999',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  comingSoonText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});
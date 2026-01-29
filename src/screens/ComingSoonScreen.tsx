import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  useColorScheme,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { COLORS } from '../constants/audioData';
import { IconResolver } from '../components/Icons';

type ComingSoonScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ComingSoon'
>;
type ComingSoonScreenRouteProp = RouteProp<RootStackParamList, 'ComingSoon'>;

interface Props {
  navigation: ComingSoonScreenNavigationProp;
  route: ComingSoonScreenRouteProp;
}

export const ComingSoonScreen: React.FC<Props> = ({ navigation, route }) => {
  const { title } = route.params;
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const theme = isDark ? COLORS.dark : COLORS.light;

  return (
    <LinearGradient
      colors={isDark
        ? ['#0A0A0A', '#1C1C1C']
        : ['#FFFFFF', '#F5F5F5']
      }
      style={styles.container}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: isDark ? '#2C2C2C' : '#F0F0F0' }]}
          onPress={() => navigation.goBack()}
        >
          <IconResolver name="chevron-left" size={24} color={theme.text} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={[styles.iconCircle, { backgroundColor: isDark ? '#2C2C2C' : '#F0F0F0' }]}>
            <Text style={styles.omSymbol}>🔔</Text>
          </View>
        </View>

        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
        <Text style={[styles.subtitle, { color: COLORS.saffron.default }]}>
          Coming Soon
        </Text>

        <Text style={[styles.description, { color: theme.textSecondary }]}>
          This feature is currently under development.{'\n'}
          Stay tuned for updates!
        </Text>

        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <View style={styles.featureDot} />
            <Text style={[styles.featureText, { color: theme.textSecondary }]}>
              Enhanced spiritual experience
            </Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureDot} />
            <Text style={[styles.featureText, { color: theme.textSecondary }]}>
              Rich devotional content
            </Text>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureDot} />
            <Text style={[styles.featureText, { color: theme.textSecondary }]}>
              Seamless integration
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.backHomeButton, { backgroundColor: COLORS.saffron.default }]}
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.8}
        >
          <Text style={styles.backHomeText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 48,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: -80,
  },
  iconContainer: {
    marginBottom: 32,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  omSymbol: {
    fontSize: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 48,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.saffron.default,
    marginRight: 12,
  },
  featureText: {
    fontSize: 13,
  },
  backHomeButton: {
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 25,
    shadowColor: COLORS.saffron.default,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  backHomeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

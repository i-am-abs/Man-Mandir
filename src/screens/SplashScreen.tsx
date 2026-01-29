import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { QUOTES, COLORS } from '../constants/audioData';

const { width } = Dimensions.get('window');

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;

interface Props {
  navigation: SplashScreenNavigationProp;
}

export const SplashScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={[COLORS.saffron.default, COLORS.maroon.default]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.saffron.default} />

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.omSymbol}>ॐ</Text>
        </View>

        <Text style={styles.title}>MAN MANDIR</Text>
        <Text style={styles.subtitle}>FAITH • TECH • DEVOTION</Text>
      </View>

      <View style={styles.quoteContainer}>
        <Text style={styles.quote}>"{QUOTES[0]}"</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    marginTop: -50,
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 4,
    borderColor: COLORS.gold.light,
    shadowColor: COLORS.gold.light,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  omSymbol: {
    fontSize: 60,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 3,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.gold.light,
    letterSpacing: 3,
  },
  quoteContainer: {
    position: 'absolute',
    bottom: 40,
    paddingHorizontal: 24,
  },
  quote: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
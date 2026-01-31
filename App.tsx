import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import GodSelectionScreen from './screens/GodSelectionScreen';
import ContentTypeScreen from './screens/ContentTypeScreen';
import ChalisaReaderScreen from './screens/ChalisaReaderScreen';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/gods" element={<GodSelectionScreen />} />
        <Route path="/content/:id" element={<ContentTypeScreen />} />
        <Route path="/read/:godId/:contentId" element={<ChalisaReaderScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
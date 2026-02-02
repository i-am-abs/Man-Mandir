import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';
import { DASHBOARD_ITEMS } from '../constants';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [userName] = useState(() => localStorage.getItem('userName') || 'Devotee');
  const { theme, setTheme } = useTheme();
  const [backPressCount, setBackPressCount] = useState(0);
  const [showExitToast, setShowExitToast] = useState(false);

  // Handle Back Button Logic (Double tap to exit simulation)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // Prevent immediate exit
      window.history.pushState(null, document.title, window.location.href);
      
      setBackPressCount(prev => prev + 1);
      setShowExitToast(true);
      
      setTimeout(() => {
        setBackPressCount(0);
        setShowExitToast(false);
      }, 2000);
    };

    // Push state initially so there's something to pop
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const getThemeIcon = () => {
    if (theme === 'system') return <Monitor size={20} />;
    if (theme === 'dark') return <Moon size={20} />;
    return <Sun size={20} />;
  };

  return (
    <Layout>
      {/* Main Content */}
      <div className="pt-6 pb-6 px-6 flex-1 overflow-y-auto no-scrollbar">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-saffron-600 font-medium text-sm uppercase tracking-wider mb-1">Man Mandir</p>
            <h1 className="text-3xl font-serif font-bold text-maroon-900 dark:text-orange-50">Namaste, {userName}</h1>
          </div>
          <div className="flex gap-2">
            <button 
                onClick={cycleTheme}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-orange-100 dark:border-slate-700 flex items-center justify-center text-gray-600 dark:text-gray-300 shadow-sm transition-colors"
            >
                {getThemeIcon()}
            </button>
          </div>
        </div>

        {/* Daily Quote / Banner */}
        <div className="bg-gradient-to-r from-saffron-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg mb-8 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10 text-9xl">ॐ</div>
            <p className="font-serif text-lg leading-relaxed relative z-10">
              "Whatever you do, do it as an offering to God. This will bring you peace."
            </p>
        </div>

        {/* Grid */}
        <div>
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4 px-1">Explore</h2>
            <div className="grid grid-cols-2 gap-4">
            {DASHBOARD_ITEMS.map((item) => (
                <FeatureCard
                key={item.id}
                title={item.title}
                icon={item.icon}
                status={item.status}
                onClick={() => item.route && navigate(item.route)}
                />
            ))}
            </div>
        </div>
      </div>

      {/* Exit Toast */}
      {showExitToast && backPressCount < 2 && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-lg z-50 animate-fade-in">
          Press back again to exit
        </div>
      )}
    </Layout>
  );
};

export default HomeScreen;

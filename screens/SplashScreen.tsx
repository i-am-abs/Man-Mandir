import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const storedName = localStorage.getItem('userName');
      if (storedName) {
        // Direct to Home, bypassing Welcome screen as requested
        navigate('/home', { replace: true });
      } else {
        navigate('/onboarding', { replace: true });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout className="items-center justify-center bg-saffron-50 dark:bg-slate-950">
      <div className="flex flex-col items-center animate-pulse">
        <div className="w-28 h-28 bg-gradient-to-br from-saffron-500 to-red-600 rounded-full flex items-center justify-center shadow-xl mb-6 ring-4 ring-orange-200 dark:ring-slate-800">
            <span className="text-5xl">🕉️</span>
        </div>
        <h1 className="text-4xl font-serif font-bold text-maroon-900 dark:text-orange-50 tracking-wider">Man Mandir</h1>
        <p className="text-saffron-700 dark:text-orange-200/80 mt-3 text-sm uppercase tracking-[0.2em]">Devotion . Peace</p>
      </div>
    </Layout>
  );
};

export default SplashScreen;

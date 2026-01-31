import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const storedName = localStorage.getItem('userName');
      if (storedName) {
        navigate('/home', { replace: true });
      } else {
        navigate('/onboarding', { replace: true });
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Layout className="items-center justify-center bg-saffron-50 dark:bg-slate-950">
      <div className="flex flex-col items-center animate-pulse">
        <div className="w-24 h-24 bg-saffron-500 dark:bg-orange-600 rounded-full flex items-center justify-center shadow-lg mb-6">
            <span className="text-4xl text-white">ॐ</span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-maroon-900 dark:text-orange-50 tracking-wider">Man Mandir</h1>
        <p className="text-saffron-700 dark:text-orange-200/80 mt-2 text-sm uppercase tracking-widest">Devotion . Peace . Prayer</p>
      </div>
    </Layout>
  );
};

export default SplashScreen;
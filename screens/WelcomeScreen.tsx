import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleEnter = () => {
    navigate('/home', { replace: true });
  };

  return (
    <Layout className="justify-center items-center px-8 text-center bg-gradient-to-b from-saffron-50 to-white dark:from-slate-900 dark:to-black">
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-4xl font-serif font-bold text-maroon-900 dark:text-orange-50 mb-4">Namaste, <br/>{name}</h1>
        <div className="text-6xl my-8 animate-pulse">🙏</div>
        <p className="text-gray-600 dark:text-gray-400 text-lg">May your day be filled with<br/>peace and devotion.</p>
      </div>

      <button
        onClick={handleEnter}
        className="w-full max-w-xs py-4 bg-maroon-900 dark:bg-orange-700 text-white rounded-full font-semibold shadow-xl active:scale-95 transition-all hover:bg-maroon-800 dark:hover:bg-orange-600"
      >
        Enter Temple
      </button>
    </Layout>
  );
};

export default WelcomeScreen;
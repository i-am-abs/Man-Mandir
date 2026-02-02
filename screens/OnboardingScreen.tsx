import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const OnboardingScreen: React.FC = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (name.trim().length > 0) {
      localStorage.setItem('userName', name.trim());
      // Direct to Home, bypassing Welcome screen as requested
      navigate('/home', { replace: true });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
        handleContinue();
    }
  }

  return (
    <Layout className="px-8 justify-center bg-devotional-bg dark:bg-devotional-darkBg">
      <div className="mb-12">
        <div className="w-16 h-16 bg-orange-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 text-2xl animate-bounce">
            🙏
        </div>
        <h2 className="text-3xl font-serif font-bold text-maroon-900 dark:text-orange-50 mb-2">Welcome</h2>
        <p className="text-gray-600 dark:text-gray-400">Let's start your spiritual journey.</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">What should we call you?</label>
          <div className="relative">
            <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter your name"
                className="w-full px-4 py-4 rounded-xl border-2 border-orange-100 dark:border-slate-700 focus:border-saffron-500 dark:focus:border-saffron-500 focus:outline-none bg-white dark:bg-slate-800 text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors shadow-sm"
                autoFocus
                autoComplete="off"
            />
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={name.trim().length === 0}
          className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform active:scale-95 duration-200
            ${name.trim().length > 0 
              ? 'bg-saffron-600 text-white hover:bg-saffron-700 shadow-orange-200 dark:shadow-none' 
              : 'bg-gray-200 dark:bg-slate-800 text-gray-400 cursor-not-allowed'}`}
        >
          Continue
        </button>
      </div>
    </Layout>
  );
};

export default OnboardingScreen;

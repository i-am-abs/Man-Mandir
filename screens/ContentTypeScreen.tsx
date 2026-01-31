import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { GODS_LIST, CONTENT_REGISTRY } from '../constants';
import { FeatureStatus } from '../types';
import { BookOpen, Music, Mic2, ArrowLeft, Home, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ContentTypeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { theme, setTheme } = useTheme();
  
  const god = GODS_LIST.find(g => g.id === id) || GODS_LIST[0];

  // Helper to check if content exists in registry
  const checkStatus = (typeId: string): FeatureStatus => {
    const key = `${id}_${typeId}`;
    return CONTENT_REGISTRY[key] ? FeatureStatus.ACTIVE : FeatureStatus.COMING_SOON;
  };

  const contentTypes = [
    { id: 'chalisa', title: 'Chalisa', subtitle: 'Read & Recite', icon: <BookOpen />, status: checkStatus('chalisa') },
    { id: 'aarti', title: 'Aarti', subtitle: 'Worship Song', icon: <Music />, status: checkStatus('aarti') },
    { id: 'mantra', title: 'Mantra', subtitle: 'Chanting', icon: <Mic2 />, status: checkStatus('mantra') },
  ];

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const getThemeIcon = () => {
    if (theme === 'system') return <Monitor size={20} color="white" />;
    if (theme === 'dark') return <Moon size={20} color="white" />;
    return <Sun size={20} color="white" />;
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/gods');
  };

  return (
    <Layout>
      {/* Decorative Header Background */}
      <div className={`${god.primaryColor} relative pb-12 pt-6 rounded-b-[3rem] shadow-xl overflow-visible z-10 transition-colors duration-300`}>
        {/* Abstract Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] rounded-b-[3rem]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent rounded-b-[3rem]"></div>
        
        {/* Navigation Bar */}
        <div className="flex items-center justify-between px-6 mb-6 relative z-20">
             <div className="flex items-center gap-3">
                <button 
                    onClick={handleBack} 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md active:scale-95 transition-all border border-white/10"
                    aria-label="Back"
                >
                    <ArrowLeft size={22} color="white" />
                </button>
                <button 
                    onClick={() => navigate('/home')} 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md active:scale-95 transition-all border border-white/10"
                    aria-label="Home"
                >
                    <Home size={22} color="white" />
                </button>
             </div>

             <div className="flex items-center gap-3">
                <button 
                    onClick={cycleTheme}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md active:scale-95 transition-all border border-white/10"
                    aria-label="Toggle Theme"
                >
                    {getThemeIcon()}
                </button>
             </div>
        </div>
        
        {/* Title Section */}
        <div className="text-center relative z-20 px-4 pb-16">
             <h1 className="text-4xl font-serif font-bold tracking-wide drop-shadow-lg text-white mb-2">{god.name}</h1>
             <p className="text-white/90 text-lg font-sans font-medium tracking-wide bg-white/20 inline-block px-4 py-1 rounded-full backdrop-blur-sm border border-white/10">{god.hindiName}</p>
        </div>

        {/* Floating Image Section */}
        <div className="absolute left-1/2 -bottom-24 transform -translate-x-1/2 z-30">
            <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-white/20 dark:bg-black/20 rounded-full blur-xl animate-pulse"></div>
                
                {/* Image Container */}
                <div className="w-48 h-48 rounded-full p-1.5 bg-white dark:bg-slate-800 shadow-2xl relative">
                    <div className="w-full h-full rounded-full overflow-hidden relative bg-saffron-50 dark:bg-slate-700">
                        <img 
                            src={god.image} 
                            alt={god.name} 
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Inner Shine */}
                        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Spacer for the floating image */}
      <div className="h-28"></div>

      {/* Content List */}
      <div className="px-6 pb-10 space-y-4">
        {contentTypes.map((type) => (
            <div 
                key={type.id}
                onClick={() => type.status === FeatureStatus.ACTIVE && navigate(`/read/${id}/${type.id}`)}
                className={`group relative p-5 rounded-2xl border transition-all duration-300
                    ${type.status === FeatureStatus.ACTIVE 
                        ? 'bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer border-gray-100 dark:border-slate-700' 
                        : 'bg-gray-50 dark:bg-slate-900 opacity-70 grayscale cursor-not-allowed border-transparent'
                    }
                `}
            >
                <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner
                        ${type.status === FeatureStatus.ACTIVE 
                            ? 'bg-orange-50 dark:bg-slate-700 text-orange-600 dark:text-orange-400' 
                            : 'bg-gray-100 dark:bg-slate-800 text-gray-400'
                        }`}>
                        {type.icon}
                    </div>
                    
                    <div className="flex-1">
                        <h3 className={`font-bold text-lg mb-0.5 ${type.status === FeatureStatus.ACTIVE ? 'text-gray-800 dark:text-gray-100' : 'text-gray-500'}`}>
                            {type.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            {type.subtitle}
                        </p>
                    </div>

                    {type.status === FeatureStatus.ACTIVE ? (
                        <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-slate-700 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                        </div>
                    ) : (
                        <span className="text-[10px] font-bold uppercase bg-gray-200 dark:bg-slate-800 text-gray-500 px-2 py-1 rounded-md tracking-wide">
                            Soon
                        </span>
                    )}
                </div>
            </div>
        ))}
      </div>
    </Layout>
  );
};

export default ContentTypeScreen;
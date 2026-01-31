import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
  backPath?: string; // Optional explicit back path
}

const Header: React.FC<HeaderProps> = ({ title, showBack = true, rightAction, backPath }) => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

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

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent bubbling
    e.stopPropagation();
    if (backPath) {
        navigate(backPath);
    } else {
        navigate(-1);
    }
  };

  const handleHome = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/home');
  };

  return (
    <div className="sticky top-0 z-50 bg-devotional-bg/95 dark:bg-devotional-darkBg/95 backdrop-blur-sm px-4 py-4 flex items-center justify-between border-b border-orange-100/50 dark:border-slate-800 transition-colors duration-300">
      <div className="flex items-center gap-1">
        {showBack && (
          <button 
            onClick={handleBack}
            className="w-10 h-10 flex items-center justify-center rounded-full active:bg-orange-100 dark:active:bg-slate-800 text-maroon-900 dark:text-orange-100 transition-all duration-200 outline-none focus:bg-orange-50 dark:focus:bg-slate-800 active:scale-95 hover:bg-orange-50/50 dark:hover:bg-slate-800/50"
            aria-label="Go back"
            style={{ touchAction: 'manipulation' }}
          >
            <ArrowLeft size={24} />
          </button>
        )}
        
        <button 
            onClick={handleHome}
            className="w-10 h-10 flex items-center justify-center rounded-full active:bg-orange-100 dark:active:bg-slate-800 text-maroon-900 dark:text-orange-100 transition-all duration-200 outline-none focus:bg-orange-50 dark:focus:bg-slate-800 active:scale-95 hover:bg-orange-50/50 dark:hover:bg-slate-800/50"
            aria-label="Go Home"
        >
            <Home size={24} />
        </button>

        <h1 className="text-xl font-bold text-maroon-900 dark:text-orange-50 font-serif tracking-wide ml-2 truncate max-w-[140px] sm:max-w-none">{title}</h1>
      </div>
      
      <div className="flex items-center gap-2 z-10">
        <button 
            onClick={cycleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full active:bg-orange-100 dark:active:bg-slate-800 text-maroon-900 dark:text-orange-100 transition-all duration-200 active:scale-95 hover:bg-orange-50/50 dark:hover:bg-slate-800/50"
            aria-label="Toggle Theme"
        >
            {getThemeIcon()}
        </button>
        {rightAction && <div className="pl-1">{rightAction}</div>}
      </div>
    </div>
  );
};

export default Header;
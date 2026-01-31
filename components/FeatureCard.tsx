import React from 'react';
import { FeatureStatus } from '../types';

interface FeatureCardProps {
  title: string;
  subtitle?: string;
  icon?: string;
  image?: string;
  status: FeatureStatus;
  onClick: () => void;
  variant?: 'large' | 'list';
  isHighlighted?: boolean;
  isLoading?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  subtitle, 
  icon, 
  image, 
  status, 
  onClick,
  variant = 'large',
  isHighlighted = false,
  isLoading = false
}) => {
  const isActive = status === FeatureStatus.ACTIVE;

  // Base styles
  let cardClasses = 'relative overflow-hidden rounded-2xl transition-all duration-300 ';
  
  if (isActive) {
      cardClasses += 'cursor-pointer ';
      if (isHighlighted) {
          // Highlight style
          cardClasses += 'bg-orange-50 dark:bg-slate-800/80 border-2 border-orange-200 dark:border-orange-500/30 shadow-md ';
      } else {
          cardClasses += 'bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:shadow-lg hover:border-orange-100 dark:hover:border-slate-600 ';
      }
  } else {
      cardClasses += 'cursor-default opacity-75 bg-gray-50 dark:bg-slate-900 border border-transparent ';
  }

  const handleInteraction = () => {
    if (isActive && !isLoading) {
      onClick();
    }
  };

  if (variant === 'list') {
    return (
      <div onClick={handleInteraction} className={`${cardClasses} p-3.5 flex items-center gap-4 group active:scale-[0.98]`}>
        {image ? (
            <div className={`relative flex-shrink-0 transition-all duration-500 ease-out ${isHighlighted ? 'w-16 h-16' : 'w-14 h-14'} ${isLoading ? 'scale-110' : ''}`}>
                 <div className={`w-full h-full rounded-full p-0.5 transition-all duration-500 ${isHighlighted ? 'bg-orange-200 dark:bg-orange-500/50' : 'bg-gray-100 dark:bg-slate-700'} ${isLoading ? 'ring-2 ring-saffron-500 shadow-[0_0_15px_rgba(234,88,12,0.6)]' : ''}`}>
                    <img 
                        src={image} 
                        alt={title} 
                        className={`w-full h-full rounded-full object-cover bg-white dark:bg-slate-800 transition-all duration-500 ${!isActive && 'grayscale opacity-70'} ${isLoading ? 'brightness-110' : ''}`} 
                    />
                 </div>
            </div>
        ) : (
            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${isActive ? 'bg-orange-100 dark:bg-slate-700 text-orange-600' : 'bg-gray-200 dark:bg-slate-800 text-gray-400'}`}>
                {icon}
            </div>
        )}
        
        <div className="flex-1 min-w-0">
            <h3 className={`font-bold truncate transition-colors duration-300 ${isHighlighted || isLoading ? 'text-lg text-maroon-900 dark:text-orange-50' : 'text-base text-gray-800 dark:text-gray-200'}`}>
                {title}
            </h3>
            {subtitle && (
                <p className={`text-sm truncate transition-colors duration-300 ${isHighlighted || isLoading ? 'text-orange-700 dark:text-orange-200/70' : 'text-gray-500 dark:text-gray-400'}`}>
                    {subtitle}
                </p>
            )}
        </div>

        <div className="flex-shrink-0">
            {!isActive ? (
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-200 dark:bg-slate-800 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-md">
                    Soon
                </span>
            ) : (
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isHighlighted || isLoading ? 'bg-orange-500 text-white' : 'bg-gray-100 dark:bg-slate-700 text-gray-400 dark:text-gray-500 group-hover:bg-orange-500 group-hover:text-white'}`}>
                    {isLoading ? (
                         <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                    )}
                 </div>
            )}
        </div>
      </div>
    );
  }

  // Large Variant (Grid)
  return (
    <div onClick={handleInteraction} className={`${cardClasses} aspect-square flex flex-col items-center justify-center p-6 text-center group active:scale-95`}>
       {!isActive && (
        <div className="absolute top-3 right-3">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-200 dark:bg-slate-800 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-md">
                Soon
            </span>
        </div>
      )}

      <div className={`text-4xl mb-4 transition-transform duration-300 ${isActive ? 'group-hover:scale-110 drop-shadow-sm' : 'grayscale opacity-50'}`}>
        {icon}
      </div>
      
      <h3 className={`font-bold font-serif text-lg ${isActive ? 'text-maroon-900 dark:text-orange-100' : 'text-gray-400 dark:text-gray-600'}`}>
        {title}
      </h3>
    </div>
  );
};

export default FeatureCard;
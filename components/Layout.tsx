import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-900 font-sans transition-colors duration-300">
      <div className={`w-full max-w-md min-h-screen bg-devotional-bg dark:bg-devotional-darkBg shadow-2xl relative flex flex-col transition-colors duration-300 pt-safe pb-safe ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

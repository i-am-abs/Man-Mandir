import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen w-full flex justify-center bg-stone-100 dark:bg-stone-950">
      <div className={`w-full max-w-md h-[100dvh] bg-white dark:bg-stone-900 shadow-2xl relative flex flex-col overflow-hidden ${className}`}>
        {children}
      </div>
    </div>
  );
};
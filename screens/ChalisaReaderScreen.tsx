import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { CONTENT_REGISTRY } from '../constants';
import { Languages } from 'lucide-react';

const ChalisaReaderScreen: React.FC = () => {
  const [isHindi, setIsHindi] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const { godId, contentId } = useParams();

  // Simulate loading delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleLanguage = () => setIsHindi(!isHindi);

  // Retrieve content from registry
  const data = CONTENT_REGISTRY[`${godId}_${contentId}`];

  // Loading Skeleton State
  if (isLoading) {
      return (
        <Layout>
            <Header title="" backPath={`/content/${godId}`} showBack={true} />
            <div className="flex-1 p-6 space-y-8 animate-pulse">
                {/* Title Skeleton */}
                <div className="flex flex-col items-center space-y-3 mt-4 mb-12">
                    <div className="h-8 bg-black/5 dark:bg-white/10 rounded-md w-3/4"></div>
                    <div className="h-1 bg-black/5 dark:bg-white/10 rounded-full w-24"></div>
                </div>

                {/* Content Skeleton */}
                <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col items-center space-y-3">
                             {/* Verse box placeholder */}
                            <div className="w-full h-32 bg-black/5 dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5"></div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
      );
  }

  if (!data) {
    return (
        <Layout className="justify-center items-center">
            <p className="text-gray-500 dark:text-gray-400">Content not found.</p>
        </Layout>
    );
  }

  return (
    <Layout>
      <Header 
        title={isHindi ? data.titleHindi : data.titleEnglish}
        backPath={`/content/${godId}`}
        rightAction={
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 bg-orange-100 dark:bg-slate-800 hover:bg-orange-200 dark:hover:bg-slate-700 text-orange-800 dark:text-orange-200 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors"
            >
                <Languages size={16} />
                <span className="hidden xs:inline">{isHindi ? 'English' : 'हिंदी'}</span>
                <span className="xs:hidden">{isHindi ? 'Eng' : 'हिंदी'}</span>
            </button>
        }
      />
      
      <div className="flex-1 overflow-y-auto p-6 pb-32 scroll-smooth no-scrollbar animate-fade-in">
        {/* Title */}
        <div className="text-center mb-8 mt-2">
            <h1 className="text-3xl font-bold text-maroon-900 dark:text-orange-100 font-serif mb-2 leading-tight">
                {isHindi ? data.titleHindi : data.titleEnglish}
            </h1>
            <div className="h-1 w-24 bg-saffron-500 mx-auto rounded-full"></div>
        </div>

        {/* --- CHALISA FORMAT RENDERING --- */}
        {data.type === 'chalisa' && (
            <>
                {/* Doha */}
                <div className="mb-10 space-y-6">
                    <h3 className="text-center text-saffron-600 dark:text-saffron-400 font-bold uppercase tracking-widest text-sm border-b border-saffron-200 dark:border-slate-700 w-max mx-auto pb-1 px-4">Doha</h3>
                    {data.doha.map((verse, idx) => (
                        <div key={`doha-${idx}`} className="text-center">
                            <p className={`text-xl leading-relaxed font-medium text-gray-800 dark:text-gray-200 ${isHindi ? 'font-serif' : 'font-sans'}`}>
                                {isHindi ? verse.hindi : verse.english}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Chaupai */}
                <div className="space-y-6">
                    <h3 className="text-center text-saffron-600 dark:text-saffron-400 font-bold uppercase tracking-widest text-sm border-b border-saffron-200 dark:border-slate-700 w-max mx-auto pb-1 px-4 mb-6">Chaupai</h3>
                    {data.chaupai.map((verse, idx) => (
                        <div key={`chaupai-${idx}`} className="text-center bg-white/60 dark:bg-slate-800/60 p-5 rounded-2xl border border-orange-100 dark:border-slate-700/50 shadow-sm backdrop-blur-sm">
                            <span className="text-xs text-saffron-400 dark:text-slate-600 font-mono mb-1 block">{idx + 1}</span>
                            <p className={`text-xl leading-8 text-gray-900 dark:text-gray-100 ${isHindi ? 'font-serif' : 'font-sans'}`}>
                                {isHindi ? verse.hindi : verse.english}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Final Doha */}
                {data.finalDoha && (
                    <div className="mt-12 mb-8">
                        <h3 className="text-center text-saffron-600 dark:text-saffron-400 font-bold uppercase tracking-widest text-sm mb-6 border-b border-saffron-200 dark:border-slate-700 w-max mx-auto pb-1 px-4">Final Doha</h3>
                        <div className="text-center bg-orange-100/50 dark:bg-slate-800/80 p-6 rounded-2xl border border-orange-200 dark:border-slate-600">
                            <p className={`text-xl leading-relaxed font-bold text-maroon-900 dark:text-orange-100 ${isHindi ? 'font-serif' : 'font-sans'}`}>
                                {isHindi ? data.finalDoha.hindi : data.finalDoha.english}
                            </p>
                        </div>
                    </div>
                )}
            </>
        )}

        {/* --- LINEAR FORMAT (AARTI / MANTRA) RENDERING --- */}
        {(data.type === 'aarti' || data.type === 'mantra') && (
            <div className="space-y-6">
                 {data.verses.map((verse, idx) => (
                    <div key={`verse-${idx}`} className="text-center bg-white/60 dark:bg-slate-800/60 p-5 rounded-2xl border border-orange-100 dark:border-slate-700/50 shadow-sm backdrop-blur-sm">
                        <p className={`text-xl leading-8 text-gray-900 dark:text-gray-100 mb-2 ${isHindi ? 'font-serif' : 'font-sans'}`}>
                            {isHindi ? verse.hindi : verse.english}
                        </p>
                        {/* Show English translation below Hindi if in Hindi mode for Mantras, optional logic */}
                    </div>
                ))}
            </div>
        )}

        <div className="text-center text-gray-400 dark:text-gray-600 text-sm mt-12 pb-8">
             {godId === 'hanuman' ? 'Jai Shree Ram • Jai Hanuman' : 
              godId === 'ganesha' ? 'Ganpati Bappa Morya' : 
              godId === 'gayatri' ? 'Om Bhur Bhuva Swaha' : 'Om Shanti'}
        </div>
      </div>
    </Layout>
  );
};

export default ChalisaReaderScreen;
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header';
import { GODS_LIST, CONTENT_REGISTRY } from '../constants';
import { FeatureStatus } from '../types';
import { BookOpen, Music, Mic2 } from 'lucide-react';

const ContentTypeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
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

  return (
    <Layout>
      <Header 
        title={`${god.name} ${god.hindiName ? `(${god.hindiName})` : ''}`} 
        showBack={true} 
        backPath="/gods" 
      />

      {/* Content List */}
      <div className="px-6 py-6 space-y-4 flex-1 overflow-y-auto no-scrollbar">
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

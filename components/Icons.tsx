import React from 'react';
import { 
  Bell, Droplets, Landmark, Map, Music, User, Milk, ChevronLeft, ChevronRight,
  Play, Pause, SkipBack, SkipForward, Repeat, Info, Search, 
  Heart, History, Sun, Moon, Edit2, X, Settings, List, Trash2, Palette,
  Volume2, VolumeX
} from 'lucide-react';

// Custom OM Icon since Lucide doesn't have it standard
const OmIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 4a4 4 0 0 1 4 4c0 2-2 3-2 3s2 1 2 4a4 4 0 0 1-8 0" />
    <path d="M16 11h4" />
    <path d="M18 11c0-2 2-3 2-3" />
    <path d="M12 4c0-2 2-2 2-2" />
    <circle cx="18" cy="5" r="1" fill="currentColor" />
  </svg>
);

export const IconResolver = ({ name, className = "w-6 h-6" }: { name: string, className?: string }) => {
  switch (name) {
    case 'Om': return <h1 className={`font-serif font-bold ${className} flex items-center justify-center text-2xl`}>ॐ</h1>;
    case 'User': return <User className={className} />;
    case 'Landmark': return <Landmark className={className} />;
    case 'Bell': return <Bell className={className} />;
    case 'Droplets': return <Droplets className={className} />;
    case 'Map': return <Map className={className} />;
    case 'Milk': return <Milk className={className} />;
    case 'Music': return <Music className={className} />;
    case 'Back': return <ChevronLeft className={className} />;
    case 'Next': return <ChevronRight className={className} />;
    case 'Play': return <Play className={className} />;
    case 'Pause': return <Pause className={className} />;
    case 'SkipBack': return <SkipBack className={className} />;
    case 'SkipForward': return <SkipForward className={className} />;
    case 'Repeat': return <Repeat className={className} />;
    case 'Info': return <Info className={className} />;
    case 'Search': return <Search className={className} />;
    case 'Heart': return <Heart className={className} />;
    case 'History': return <History className={className} />;
    case 'Sun': return <Sun className={className} />;
    case 'Moon': return <Moon className={className} />;
    case 'Edit': return <Edit2 className={className} />;
    case 'Close': return <X className={className} />;
    case 'Settings': return <Settings className={className} />;
    case 'List': return <List className={className} />;
    case 'Trash': return <Trash2 className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'VolumeHigh': return <Volume2 className={className} />;
    case 'VolumeMute': return <VolumeX className={className} />;
    default: return <Info className={className} />;
  }
};

export interface Verse {
  hindi: string;
  english: string;
  meaning?: string;
}

export interface ChalisaContent {
  type: 'chalisa';
  titleHindi: string;
  titleEnglish: string;
  doha: Verse[];
  chaupai: Verse[];
  finalDoha?: Verse;
}

export interface LinearContent {
  type: 'aarti' | 'mantra';
  titleHindi: string;
  titleEnglish: string;
  verses: Verse[];
}

export type DevotionalContent = ChalisaContent | LinearContent;

export enum FeatureStatus {
  ACTIVE = 'ACTIVE',
  COMING_SOON = 'COMING_SOON'
}

export interface DashboardItem {
  id: string;
  title: string;
  icon: string; // Emoji or Icon name
  status: FeatureStatus;
  route?: string;
}

export interface GodProfile {
  id: string;
  name: string;
  hindiName: string;
  image: string; // Placeholder URL
  status: FeatureStatus;
  primaryColor: string;
}

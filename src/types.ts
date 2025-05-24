export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export interface PlaylistData {
  videos: Video[];
}

export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
} 
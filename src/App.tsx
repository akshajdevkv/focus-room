import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import PlaylistInput from './components/PlaylistInput';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import PomodoroTimer from './components/PomodoroTimer';
import ThemeToggle from './components/ThemeToggle';
import MotivationalQuote from './components/MotivationalQuote';
import NotesSection from './components/NotesSection';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';
import { PlaylistData } from './types';
import { fetchPlaylistData } from './utils/youtube';
import './styles/global.css';

const App: React.FC = () => {
  const [playlistData, setPlaylistData] = useState<PlaylistData | null>(null);
  const [currentVideoId, setCurrentVideoId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePlaylistSubmit = async (url: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const playlistId = url.match(/[?&]list=([^&]+)/)?.[1];
      if (!playlistId) throw new Error('Invalid playlist URL');

      const data = await fetchPlaylistData(playlistId);
      setPlaylistData(data);
      setCurrentVideoId(data.videos[0].id);
    } catch (error) {
      console.error('Error loading playlist:', error);
      setError(error instanceof Error ? error.message : 'Failed to load playlist');
      setPlaylistData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVideoEnd = () => {
    if (!playlistData) return;
    
    const currentIndex = playlistData.videos.findIndex(video => video.id === currentVideoId);
    const nextIndex = (currentIndex + 1) % playlistData.videos.length;
    setCurrentVideoId(playlistData.videos[nextIndex].id);
  };

  const currentVideo = playlistData?.videos.find(video => video.id === currentVideoId);

  return (
    <ThemeProvider>
      <div className="app-container">
        <div className="main-content">
          <PlaylistInput onSubmit={handlePlaylistSubmit} isLoading={isLoading} />
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          {playlistData ? (
            <div className="video-and-playlist">
              <div className="video-section">
                <VideoPlayer 
                  videoId={currentVideoId} 
                  onEnd={handleVideoEnd}
                  videoInfo={currentVideo}
                />
              </div>
              <div className="playlist-section">
                <VideoList
                  videos={playlistData.videos}
                  currentVideoId={currentVideoId}
                  onVideoSelect={setCurrentVideoId}
                />
              </div>
            </div>
          ) : (
            !isLoading && !error && <WelcomeSection />
          )}
          <Footer />
        </div>
        <div className="pomodoro-space">
          <ThemeToggle />
          <PomodoroTimer />
          <MotivationalQuote />
          <NotesSection />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App; 
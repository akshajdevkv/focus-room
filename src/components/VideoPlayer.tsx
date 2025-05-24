import React from 'react';
import YouTube from 'react-youtube';
import { useTheme } from '../context/ThemeContext';
import { Video } from '../types';
import '../styles/VideoPlayer.css';

interface VideoPlayerProps {
  videoId: string;
  onEnd: () => void;
  videoInfo?: Video;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, onEnd, videoInfo }) => {
  const { darkMode } = useTheme();

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1 as const,
      rel: 0 as const,
      modestbranding: 1 as const,
      color: 'white' as const,
    },
  };

  return (
    <div className={`video-player ${darkMode ? 'dark' : 'light'}`}>
      {videoInfo && (
        <div className="video-info-overlay">
          <h2>{videoInfo.title}</h2>
          <p>{videoInfo.description || 'No description available'}</p>
        </div>
      )}
      <YouTube
        videoId={videoId}
        opts={opts}
        onEnd={onEnd}
        className="youtube-player"
      />
    </div>
  );
};

export default VideoPlayer; 
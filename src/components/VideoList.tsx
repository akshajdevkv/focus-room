import React from 'react';
import { Video } from '../types';
import { useTheme } from '../context/ThemeContext';
import '../styles/VideoList.css';

interface VideoListProps {
  videos: Video[];
  currentVideoId: string;
  onVideoSelect: (videoId: string) => void;
}

const VideoList: React.FC<VideoListProps> = ({ videos, currentVideoId, onVideoSelect }) => {
  const { darkMode } = useTheme();

  return (
    <div className="playlist-container">
      <div className="playlist-header">
        <span>Playlist</span>
        <span>{videos.length} videos</span>
      </div>
      <div className="playlist-items">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`video-item ${video.id === currentVideoId ? 'active' : ''}`}
            onClick={() => onVideoSelect(video.id)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="thumbnail"
            />
            <div className="video-info">
              <div className="video-title">{video.title}</div>
              <div className="video-description">
                {video.description ? (
                  video.description.length > 100 
                    ? `${video.description.substring(0, 100)}...` 
                    : video.description
                ) : 'No description available'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList; 
import React, { useState } from 'react';
import '../styles/PlaylistInput.css';

interface PlaylistInputProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const PlaylistInput: React.FC<PlaylistInputProps> = ({ onSubmit, isLoading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url.trim());
    }
  };

  return (
    <form className="playlist-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube playlist URL"
        className="playlist-input"
        disabled={isLoading}
      />
      <button 
        type="submit" 
        className="submit-button"
        disabled={isLoading || !url.trim()}
      >
        {isLoading ? 'Loading...' : 'Load Playlist'}
      </button>
    </form>
  );
};

export default PlaylistInput; 
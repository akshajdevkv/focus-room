import React from 'react';
import '../styles/WelcomeSection.css';

const WelcomeSection: React.FC = () => {
  return (
    <div className="welcome-section">
      <h1>Welcome to Focus Room</h1>
      <p className="subtitle">Your personal space for productive learning and focused work sessions</p>
      
      <div className="features-grid">
        <div className="feature-card">
          <span className="feature-icon">🎵</span>
          <h3>YouTube Playlists</h3>
          <p>Study or work while listening to your favorite YouTube playlists. Just paste a YouTube playlist URL to get started.</p>
        </div>
        
        <div className="feature-card">
          <span className="feature-icon">⏲️</span>
          <h3>Pomodoro Timer</h3>
          <p>Stay focused with our built-in Pomodoro timer. Work in productive intervals with timed breaks.</p>
        </div>
        
        <div className="feature-card">
          <span className="feature-icon">💡</span>
          <h3>Motivational Quotes</h3>
          <p>Get inspired with handpicked motivational quotes that change every time you refresh.</p>
        </div>
        
        <div className="feature-card">
          <span className="feature-icon">🎨</span>
          <h3>Dark/Light Theme</h3>
          <p>Customize your experience with our beautiful dark and light themes for comfortable viewing.</p>
        </div>
      </div>
      
      <div className="get-started">
        <h2>Get Started</h2>
        <p>Paste a YouTube playlist URL in the input box above to begin your focused session!</p>
        <div className="url-example">
          <code>Example: https://www.youtube.com/playlist?list=PLRBp0Fe2GpgmsW46rJyudVFlY6IYjFBIK</code>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection; 
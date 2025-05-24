import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="theme-toggle">
      <button 
        className={`theme-toggle-button ${darkMode ? 'dark' : 'light'}`}
        onClick={toggleDarkMode}
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 3v1m0 16v1m-9-9H3m3.293-5.293l-.707-.707M21 12h-1m-.293-5.293l.707-.707M6.293 17.293l-.707.707M17.293 17.293l.707.707M12 17a5 5 0 110-10 5 5 0 010 10z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle; 
import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {currentYear} Focus Room by{' '}
          <a 
            href="https://github.com/akshajdev" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Akshaj Dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 
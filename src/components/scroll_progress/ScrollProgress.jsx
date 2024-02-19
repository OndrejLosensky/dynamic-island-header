import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  const progressBarStyle = {
    width: `${scrollProgress}%`,
  };

  return (
    <div className="scroll-progress-bar">
      <div className="scroll-progress-indicator" style={progressBarStyle}></div>
    </div>
  );
};

export default ScrollProgress;
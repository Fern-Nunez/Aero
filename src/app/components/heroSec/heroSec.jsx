"use client"
import { useEffect, useState } from 'react';
import ThemedButton from '../button/themedButton';
import "./heroSec.css";

function HeroSec() {
  const [windowHeight, setWindowHeight] = useState(0);
  
  useEffect(() => {
    // Get initial height and set it once on component mount
    const initialHeight = window.innerHeight;
    setWindowHeight(initialHeight);
    
    const videoContainer = document.querySelector('.videoContainer');
    if (videoContainer) {
      videoContainer.style.height = `${initialHeight}px`;
    }
    
    // Optional: handle orientation changes
    const handleOrientationChange = () => {
      setTimeout(() => {
        // We're intentionally using the stored height to prevent
        // changes when browser UI appears/disappears
        const videoContainer = document.querySelector('.videoContainer');
        if (videoContainer) {
          videoContainer.style.height = `${initialHeight}px`;
        }
      }, 100);
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);
  
  return (
    <>
    <div className='overlay'></div>
    <div className="videoContainer">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="backgroundVideo"
      >
        <source src="/videos/heroVideo.mp4" type="video/mp4" />
      </video>
      <div className="heroContentContainer">
        <div className="heroContent">
          <p className="headlineSmall">Elevating Standards Through</p>
          <div className='headlineBigContainer'>
            <h1 className="headlineBig">Power. Precision.</h1>
            <h1 className="headlineBig">Prestige.</h1>
          </div>
          <ThemedButton/>
        </div>
      </div>
    </div>
    </>
  );
}

export default HeroSec;
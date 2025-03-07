"use client"
import "./navbar.css";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
 
  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Change to solid black after scrolling down 50px
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
   
    window.addEventListener('scroll', handleScroll);
   
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
 
  const toggleMenu = () => {
    if (isMenuOpen) {
      // Immediately set isClosing to true to start the closing animation
      setIsClosing(true);
     
      // Then remove the menu from the DOM after animation completes
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 400); // Match this to your animation duration
    } else {
      // Immediately open the menu
      setIsMenuOpen(true);
    }
  };
 
  return (
    <div className={`navbarContainer ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="navbarElementsContainer">
          <a href="/">
            <div className="logo">
                AERO
            </div>
          </a>
            <div className={`navbarHamburgerMenu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="hamburgerMenuLineOne"></div>
                <div className="hamburgerMenuLineTwo"></div>
                <div className="hamburgerMenuLineThree"></div>
            </div>
        </div>
        {(isMenuOpen || isClosing) && (
          <div className={`mobileNavMenu ${isClosing ? 'closing' : ''}`}>
            {/* Menu content remains the same */}
            <a href="/">
              <div className="mobileNavMenuLink">
                Home
              </div>
            </a>
            <hr className="mobileNavMenuLine"></hr>
            <a href="/vehicles">
              <div className="mobileNavMenuLink">
                Vehicles
              </div>
            </a>
            <hr className="mobileNavMenuLine"></hr>
            <a href="/events">
              <div className="mobileNavMenuLink">
                Events
              </div>
            </a>
            <hr className="mobileNavMenuLine"></hr>
            <a href="/engineering-excellence">
              <div className="mobileNavMenuLink">
                Engineering Excellence
              </div>
            </a>
            <hr className="mobileNavMenuLine"></hr>
            <a href="/showcase">
              <div className="mobileNavMenuLink">
                Visual Showcase
              </div>
            </a>
            <hr className="mobileNavMenuLine"></hr>
            <a href="/newsletter">
              <div className="mobileNavMenuLink">
                Newsletter
              </div>
            </a>
            <hr className="mobileNavMenuLine"></hr>
            <a href="/invitation">
              <div className="mobileNavMenuLink">
                Request an Invitation
              </div>
            </a>
            <div className="socials">
              <div className="socialLink">
                I
              </div>
              <div className="socialLink">
                I
              </div>
              <div className="socialLink">
                I
              </div>
              <div className="socialLink">
                I
              </div>
              <div className="socialLink">
                I
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
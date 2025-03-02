"use client"
import { useState } from "react";
import "./footer.css";

export default function Footer() {
  const [isVehicleMenuOpen, setIsVehicleMenuOpen] = useState(false);
  const [isSupportMenuOpen, setIsSupportMenuOpen] = useState(false);
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);
  const [isLegalMenuOpen, setIsLegalMenuOpen] = useState(false);

  // States for closing animations
  const [isVehicleMenuClosing, setIsVehicleMenuClosing] = useState(false);
  const [isSupportMenuClosing, setIsSupportMenuClosing] = useState(false);
  const [isNavigationMenuClosing, setIsNavigationMenuClosing] = useState(false);
  const [isLegalMenuClosing, setIsLegalMenuClosing] = useState(false);

  // Helper function to close a specific menu with animation
  const closeMenuWithAnimation = (
    isOpenState, 
    setOpenState, 
    setClosingState, 
    animationDuration = 300
  ) => {
    if (isOpenState) {
      setClosingState(true);
      setTimeout(() => {
        setOpenState(false);
        setClosingState(false);
      }, animationDuration);
    }
  };

  // Close all other menus when one is opened
  const closeAllMenusExcept = (exceptMenu) => {
    if (exceptMenu !== 'vehicle') {
      closeMenuWithAnimation(isVehicleMenuOpen, setIsVehicleMenuOpen, setIsVehicleMenuClosing);
    }
    if (exceptMenu !== 'support') {
      closeMenuWithAnimation(isSupportMenuOpen, setIsSupportMenuOpen, setIsSupportMenuClosing);
    }
    if (exceptMenu !== 'navigation') {
      closeMenuWithAnimation(isNavigationMenuOpen, setIsNavigationMenuOpen, setIsNavigationMenuClosing);
    }
    if (exceptMenu !== 'legal') {
      closeMenuWithAnimation(isLegalMenuOpen, setIsLegalMenuOpen, setIsLegalMenuClosing);
    }
  };

  // Toggle functions
  const toggleVehicleMenu = () => {
    closeAllMenusExcept('vehicle');
    if (isVehicleMenuOpen) {
      closeMenuWithAnimation(isVehicleMenuOpen, setIsVehicleMenuOpen, setIsVehicleMenuClosing);
    } else {
      setIsVehicleMenuOpen(true);
    }
  };

  const toggleSupportMenu = () => {
    closeAllMenusExcept('support');
    if (isSupportMenuOpen) {
      closeMenuWithAnimation(isSupportMenuOpen, setIsSupportMenuOpen, setIsSupportMenuClosing);
    } else {
      setIsSupportMenuOpen(true);
    }
  };

  const toggleNavigationMenu = () => {
    closeAllMenusExcept('navigation');
    if (isNavigationMenuOpen) {
      closeMenuWithAnimation(isNavigationMenuOpen, setIsNavigationMenuOpen, setIsNavigationMenuClosing);
    } else {
      setIsNavigationMenuOpen(true);
    }
  };

  const toggleLegalMenu = () => {
    closeAllMenusExcept('legal');
    if (isLegalMenuOpen) {
      closeMenuWithAnimation(isLegalMenuOpen, setIsLegalMenuOpen, setIsLegalMenuClosing);
    } else {
      setIsLegalMenuOpen(true);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="footerContainer">
      <hr className="topFooterLine"></hr>
      <div className="returnContainer" onClick={scrollToTop} role="button" tabIndex={0}>
        <div className="returnText">
          Back to Top
        </div>
        <div className="returnChevron">
          <div className="returnChevronLeft"></div>
          <div className="returnChevronRight"></div>
        </div>
      </div>
      <hr className="footerDivider"></hr>

      <div className="footerNavContainer" onClick={toggleVehicleMenu}>
        <div className="footerHeader">
          Vehicles
        </div>
        <div className={`footerDropdown${isVehicleMenuOpen ? ' open' : ''}`}>
          <div className="dropdownLineLeft"></div>
          <div className="dropdownLineRight"></div>
        </div>
      </div>

      <hr className="footerDivider"></hr>

      {(isVehicleMenuOpen || isVehicleMenuClosing) && (
        <div className={`footerMenuLinksContainter ${isVehicleMenuClosing ? 'closing' : ''}`}>
          <a href="/vehicles">
            <div className="footerLink">Stratos</div>
          </a>
          <a href="/vehicles">
            <div className="footerLink">Tempest</div>
          </a>
          <a href="/vehicles">
            <div className="footerLink">Zenith</div>
          </a>
          
          
        </div>
      )}

      <div className="footerNavContainer" onClick={toggleNavigationMenu}>
        <div className="footerHeader">
          Navigation
        </div>
        <div className={`footerDropdown${isNavigationMenuOpen ? ' open' : ''}`}>
          <div className="dropdownLineLeft"></div>
          <div className="dropdownLineRight"></div>
        </div>
      </div>

      <hr className="footerDivider"></hr>

      {(isNavigationMenuOpen || isNavigationMenuClosing) && (
        <div className={`footerMenuLinksContainter ${isNavigationMenuClosing ? 'closing' : ''}`}>
          <a href="/">
            <div className="footerLink">Home</div>
          </a>
          <a href="/craftmanship">
            <div className="footerLink">Craftmanship</div>
          </a>
          <a href="/legacy">
            <div className="footerLink">Our Legacy</div>
          </a>
          <a href="invitation">
            <div className="footerLink">Request an Invitation</div>        
          </a>
        </div>
      )}

      <div className="footerNavContainer" onClick={toggleSupportMenu}>
        <div className="footerHeader">
          Support
        </div>
        <div className={`footerDropdown${isSupportMenuOpen ? ' open' : ''}`}>
          <div className="dropdownLineLeft"></div>
          <div className="dropdownLineRight"></div>
        </div>
      </div>
      
      <hr className="footerDivider"></hr>
      
      {(isSupportMenuOpen || isSupportMenuClosing) && (
        <div className={`footerMenuLinksContainter ${isSupportMenuClosing ? 'closing' : ''}`}>
          <div className="footerLink">Contact Us</div>
          <div className="footerLink">FAQ</div>
          <div className="footerLink">Dealership Locator</div>
          <div className="footerLink">Test Drive Request</div>
          <div className="footerLink">Maintenance & Service</div>
          <div className="footerLink">Owner's Portal</div>
        </div>
      )}

      <div className="footerNavContainer" onClick={toggleLegalMenu}>
        <div className="footerHeader">
          Legal
        </div>
        <div className={`footerDropdown${isLegalMenuOpen ? ' open' : ''}`}>
          <div className="dropdownLineLeft"></div>
          <div className="dropdownLineRight"></div>
        </div>
      </div>

      <hr className="footerDivider"></hr>

      {(isLegalMenuOpen || isLegalMenuClosing) && (
        <div className={`footerMenuLinksContainter ${isLegalMenuClosing ? 'closing' : ''}`}>
          <div className="footerLink">Privacy Policy</div>
          <div className="footerLink">Terms & Conditions</div>
          <div className="footerLink">Cookie Policy</div>
          <div className="footerLink">Return & Refund Policy</div>
          <div className="footerLink">Warranty & Service Policy</div>
          <div className="footerLink">Accessibilty Statement</div>
        </div>
      )}
      
      <div className="footerRights">
        Designed by **Name** Studio. All rights reserved.
      </div>
    </div>
  );
}
"use client"
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "./eventsSec.css";

function EventsSec() {
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Monterey Car Week March 2025",
            description: "Experience the future of automotive excellence with exclusive reveals, high-performance builds, and iconic craftsmanship.",
            image: "/images/home/carWeek.JPG",
            link: "/events/monterey-car-week-2025"
        },
        {
            id: 2,
            title: "Geneva International Motor Show",
            description: "Explore groundbreaking concept cars, cutting-edge tech, and stunning new models as top manufacturers redefine the future of driving.",
            image: "/images/home/motorShow.jpg",
            link: "/events/geneva-motor-show"
        },
        {
            id: 3,
            title: "Formula 1 Monaco Grand Prix",
            description: "Experience the Monaco Grand Prix as Charles Leclerc takes on Monte Carlo’s legendary circuit with speed and precision.",
            image: "/images/home/f1monaco.webp",
            link: "/events/monaco-grand-prix"
        }
    ]);
    
    const [activeEvent, setActiveEvent] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const [imageTransition, setImageTransition] = useState('');
    const progressBarRef = useRef(null);
    const slideIntervalRef = useRef(null);
    const animationRef = useRef(null);
    const startTimeRef = useRef(0);
    const slideDuration = 6000; // 6 seconds in milliseconds
    
    // Function to clear existing timers and animations
    const clearTimers = () => {
        if (slideIntervalRef.current) {
            clearTimeout(slideIntervalRef.current);
        }
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
    };
    
    // Function to animate the progress bar using requestAnimationFrame
    const animateProgress = (timestamp) => {
        if (!startTimeRef.current) {
            startTimeRef.current = timestamp;
        }
        
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / slideDuration * 100, 100);
        
        // Update progress bar width directly without state
        if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progress}%`;
        }
        
        // Continue animation if not complete
        if (progress < 100) {
            animationRef.current = requestAnimationFrame(animateProgress);
        }
    };
    
    // Function to start new animation cycle
    const startTimers = () => {
        // Clear any existing timers first
        clearTimers();
        
        // Reset animation start time
        startTimeRef.current = 0;
        
        // Reset progress bar width directly
        if (progressBarRef.current) {
            progressBarRef.current.style.width = '0%';
        }
        
        // Start progress bar animation
        animationRef.current = requestAnimationFrame(animateProgress);
        
        // Set timeout for next slide
        slideIntervalRef.current = setTimeout(() => {
            changeEvent((activeEvent + 1) % events.length);
        }, slideDuration);
    };
    
    // Initialize timers and animation on component mount and when activeEvent changes
    useEffect(() => {
        startTimers();
        
        // Cleanup function
        return () => clearTimers();
    }, [activeEvent, events.length]);
    
    // Reset image transition class after animation completes
    useEffect(() => {
        if (imageTransition) {
            const timer = setTimeout(() => {
                setImageTransition('');
            }, 600); // Slightly longer than animation duration
            return () => clearTimeout(timer);
        }
    }, [imageTransition]);
    
    // Create animation when changing events
    const changeEvent = (index) => {
        if (index === activeEvent) return;
        
        // Start exit animation - slide left
        setIsChanging(true);
        setImageTransition('image-slide-out');
        
        // After exit animation completes, change content and prepare for entrance
        setTimeout(() => {
            setActiveEvent(index);
            
            // Allow a short time for new content to render, then start entrance animation
            setTimeout(() => {
                setImageTransition('image-slide-in');
                setIsChanging(false);
            }, 50);
        }, 500); // Match this timing with CSS animation duration
    };
    
    const handleEventChange = (index) => {
        if (index !== activeEvent) {
            changeEvent(index);
            // Timer will restart due to the useEffect dependency on activeEvent
        }
    };
    
    const handlePrevEvent = () => {
        changeEvent((activeEvent - 1 + events.length) % events.length);
        // Timer will restart due to the useEffect dependency on activeEvent
    };
    
    const handleNextEvent = () => {
        changeEvent((activeEvent + 1) % events.length);
        // Timer will restart due to the useEffect dependency on activeEvent
    };
    
    return (
        <div className="eventsSectionJSX">
            <div className='chevronLeftContainer' onClick={handlePrevEvent}>
                <div className="chevronWrapper">
                    <Image
                        src="/icons/chevronLeftBlack.svg"
                        alt="Previous Event"
                        width={30}
                        height={30}
                        className="chevronIcon"
                    />
                </div>
            </div>
            
            <div className="eventsGridContainer">
                <div className="eventsImageContainer">
                    <Image
                        src={events[activeEvent].image}
                        alt={events[activeEvent].title}
                        fill
                        style={{ 
                            objectFit: 'cover'
                        }}
                        className={`eventsImage ${imageTransition}`}
                    />
                    <div 
                        className="loadingProgressBar" 
                        ref={progressBarRef}
                    />
                </div>
                <div className={`evenetsHeadlineContianer ${isChanging ? 'content-fading' : 'event-content-active'}`}>
                    <div className="bigHeadlineBlack">
                        {events[activeEvent].title}
                    </div>
                    <div className='whiteBoxAnimation'></div>
                </div>
                <div className={`eventsDescriptionContainer ${isChanging ? 'content-fading' : 'event-content-active'}`}>
                    <div className="descriptionBlack">
                        {events[activeEvent].description}
                    </div>
                </div>
                <div className={`eventsButtonContainer ${isChanging ? 'content-fading' : 'event-content-active'}`}>
                    <Link href={events[activeEvent].link} style={{ textDecoration: 'none', display: 'inline-block' }}>
                        <div className="blackButtonContainer">
                            <div className="blackButtonBox">
                                <div className="blackButtonContent">
                                    <span className="blackButtonArrow">
                                        <Image
                                            src="/icons/buttonArrowRightBlack.svg"
                                            width={25}
                                            height={25}
                                            alt="Arrow"
                                            style={{ display: 'block' }}
                                        />
                                    </span>
                                    <span className="blackButtonText">View Event</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="newsCounter">
                    {events.map((event, index) => (
                        <button
                            key={event.id}
                            className={`navDot ${index === activeEvent ? 'active' : ''}`}
                            onClick={() => handleEventChange(index)}
                            aria-label={`View ${event.title}`}
                        />
                    ))}
                </div>
            </div>
            
            <div className='chevronRightContainer' onClick={handleNextEvent}>
                <div className="chevronWrapper">
                    <Image
                        src="/icons/chevronRightBlack.svg"
                        alt="Next Event"
                        width={30}
                        height={30}
                        className="chevronIcon"
                    />
                </div>
            </div>
        </div>
    );
}

export default EventsSec;
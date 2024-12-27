"use client";

import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './main.css';
import SocialMedia from '../socialmedia/';
import Link from 'next/link';

const Page = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  };
  const handleProjectClick = () => {
    setShowProjects((prevShowProjects) => !prevShowProjects); // Toggle the visibility on click
};

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.projects-menu') && !target.closest('.project-list')) {
      setShowProjects(false);
  }
};



useEffect(() => {
  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, []);


  return (
    <div>
      <div className={`main-div ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="navbar-section">
          <h3 className="asadullahshafique-blog">asadullahshafique-devunity <span> BLOG</span></h3>
          
          <ul>
            <li>Home</li>
            <li><Link href="/about">About</Link></li>
            <li
              onClick={handleProjectClick}
              className="projects-menu"
            >
              Projects <span className="arrow">&#9662;</span>
              {showProjects && (
                <div className="project-list">
                  <Link href="https://milestone02-gamma.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setShowProjects(false)}>Personal Portfolio</Link>
                  <Link href="https://duas-diary-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setShowProjects(false)}>HBD Celebration App</Link>
                  <Link href="https://doctor-app-wine.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setShowProjects(false)}>iOS Calculator</Link>
                  <Link href="https://asadullahshafique-devunity.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setShowProjects(false)}>GenAI Website</Link>
                </div>
              )}
            </li>
          </ul>

          <div className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? '🌞' : '🌙'}
          </div>
        </div>

        <div className="welcome-section">
          <h1>WELCOME TO</h1>
          <div className="typed-text">
            <Typewriter
              options={{
                strings: ['TECH BLOG', 'GenAI BLOG', 'Next.js15 BLOG', 'Cloud Computing BLOG'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        
      </div>
      <hr />
      <SocialMedia />
    </div>
  );
};

export default Page;
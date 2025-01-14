import React, { useState, useEffect } from 'react';
// import { Button } from '../ui/button';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Button } from "@material-tailwind/react";



const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <Button
      onClick={toggleDarkMode}
      className="text-xl p-2 bg-black transition-all duration-100">
      {/* {isDarkMode ? 'Light Mode' : 'Dark Mode'} */}
      {isDarkMode ? <MdLightMode color='yellow'/> : <MdDarkMode color='blue'/>}
      </Button>
  );
};

export default DarkModeToggle;

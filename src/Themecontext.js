import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAlternateDarkMode, setIsAlternateDarkMode] = useState(false);

  const toggleMode = () => {
    

  
    console.log("y")
    setIsDarkMode(!isDarkMode);
    setIsAlternateDarkMode(!isAlternateDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, isAlternateDarkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

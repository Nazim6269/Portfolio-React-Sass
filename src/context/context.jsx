import { createContext, useContext, useEffect, useState } from 'react';
import { getTheme } from '../helper/getTheme';

const ThemeContext = createContext('light');

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());
  const toggleTheme = () => {
    setTheme((prevThem) => (prevThem === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem('theme', theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;

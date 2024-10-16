"use client"; 
// app/Optimization-Memorization/components/ThemeSwitcher/ThemeSwitcher.tsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeSwitcher must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = context;

  return (
    <button onClick={toggleTheme} 
    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center">
      Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
    </button>
  );
};

export default ThemeSwitcher;


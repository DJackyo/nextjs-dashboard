"use client"; 
import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Layout debe ser usado dentro de un ThemeProvider');
  }

  const { theme } = context;

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <header className={`flex justify-between items-center p-4 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-900'} shadow-md`}>
        <h1 className="text-xl">Optimización y Memorización</h1>
        <ThemeSwitcher />
      </header>
      <main className="p-4">{children}</main>
      <footer className={`p-4 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-900'}`}>
        <p>Contenido del pie de página</p>
      </footer>
    </div>
  );
};

// RootLayout solo se usa para envolver el Layout
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};

export default RootLayout;
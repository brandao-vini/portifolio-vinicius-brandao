// src/components/ThemeSwitch.tsx
"use client";

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitch() {
  // 1. Estado para rastrear o tema. Começa como 'undefined' para indicar 'carregando'.
  const [theme, setTheme] = useState<'light' | 'dark' | undefined>(undefined);
  const [mounted, setMounted] = useState(false); // Para garantir que o Local Storage só seja acessado no cliente

  // 2. Efeito para carregar a preferência do Local Storage
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    // Verifica a preferência salva ou a preferência do sistema operacional
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Define o tema inicial
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme as 'light' | 'dark');
  }, []);

  // 3. Efeito para aplicar e salvar a mudança de tema
  useEffect(() => {
    // Só executa se o tema foi carregado
    if (theme) {
      const root = window.document.documentElement;
      
      // Aplica a classe 'dark' ao elemento <html>
      if (theme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.remove('dark');
        root.classList.add('light'); 
      }
      
      // Salva a preferência no Local Storage
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // Ícone a ser exibido
  const Icon = theme === 'light' ? Moon : Sun;

  // Renderiza null enquanto o tema não é carregado (evita Hidratação/Flickering)
  if (!mounted || !theme) {
    return <div className="w-[36px] h-[36px]"></div>; // Placeholder para evitar que o layout mude
  }
  
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="p-2 rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
    >
      <Icon size={20} />
    </button>
  );
}
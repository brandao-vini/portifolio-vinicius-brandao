// src/components/Header.tsx
import Link from 'next/link';
// Icones simples para minimalismo
import { Home as HomeIcon, Code as CodeIcon, Mail as MailIcon } from 'lucide-react'; 

export function Header() {
  const accentColor = 'blue-600';
  
  return (
    // Header fixo com efeito de fundo semi-transparente
    <header className="fixed top-0 left-0 right-0 z-20 p-4 md:p-6 flex justify-center bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
      <nav className="flex space-x-6">
        <Link 
          href="/" 
          className={`flex items-center space-x-2 text-gray-700 hover:text-${accentColor} transition-colors duration-200 text-sm font-medium`}
        >
          <HomeIcon size={18} />
          <span className="hidden sm:inline">Início</span>
        </Link>
        <Link 
          href="/projects" 
          className={`flex items-center space-x-2 text-gray-700 hover:text-${accentColor} transition-colors duration-200 text-sm font-medium`}
        >
          <CodeIcon size={18} />
          <span className="hidden sm:inline">Projetos</span>
        </Link>
        <Link 
          href="/contact" 
          className={`flex items-center space-x-2 text-gray-700 hover:text-${accentColor} transition-colors duration-200 text-sm font-medium`}
        >
          <MailIcon size={18} />
          <span className="hidden sm:inline">Contato</span>
        </Link>
      </nav>
    </header>
  );
}

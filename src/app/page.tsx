'use client'; // Necessário para interatividade (botões, links, scroll)

import Image from 'next/image';
import { useState } from 'react';
// Se quiser ícones reais depois, instale: npm install react-icons
// import { FaGithub, FaLinkedin, FaInstagram, FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';

// --- 1. DADOS SEPARADOS (Fácil de editar!) ---
const projects = [
  {
    title: "Escrita Livre (P5.js)",
    desc: "Plataforma de desenho criativo e interativo utilizando a biblioteca gráfica P5.js.",
    tags: ["JavaScript", "Canvas", "Criatividade"],
    img: "/projeto-p5js.jpg",
    link: "https://vinizinhoo.github.io/js-escritalivre/"
  },
  {
    title: "Flashcards Quiz",
    desc: "Jogo de perguntas e respostas para testar conhecimentos de forma dinâmica.",
    tags: ["HTML", "CSS", "Lógica JS"],
    img: "/projeto-flashcards.jpg",
    link: "https://vinizinhoo.github.io/flashcards/"
  },
  {
    title: "AluraPlus",
    desc: "Landing page responsiva demonstrando planos e combos de assinatura.",
    tags: ["Frontend", "Responsividade", "CSS Grid"],
    img: "/projeto-aluraplus.jpg",
    link: "https://vinizinhoo.github.io/alura-plus/"
  }
];

const skills = [
  { name: "HTML5", color: "text-orange-600" },
  { name: "CSS3", color: "text-blue-600" },
  { name: "JavaScript", color: "text-yellow-500" },
  { name: "TypeScript", color: "text-blue-700" },
  { name: "React / Next.js", color: "text-cyan-500" },
  { name: "Tailwind CSS", color: "text-teal-500" },
];

export default function HomePage() {
  // Lógica simples para scroll suave
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* --- NAVBAR FLUTUANTE (Melhoria Visual) --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:bg-gray-950/80 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter text-blue-600 dark:text-blue-400">VB.</span>
          
          <ul className="flex space-x-6 text-sm font-medium">
            {['Sobre', 'Projetos', 'Contato'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="hover:text-blue-600 transition dark:hover:text-blue-400"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <Image
              src="/vini.jpg" // Certifique-se que essa imagem existe em /public
              alt="Vinícius Brandão"
              fill
              className="rounded-full object-cover border-4 border-white shadow-xl dark:border-gray-800"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-white">
            Vinícius Brandão
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 dark:text-gray-400">
            Transformando ideias em experiências digitais com <span className="text-blue-600 font-bold">Código & Design</span>.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#projetos"
              onClick={(e) => handleScroll(e, 'projetos')}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition transform"
            >
              Ver Projetos
            </a>
            <a
              href="https://github.com/brandao-vini"
              target="_blank"
              className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* --- SOBRE & SKILLS (Melhoria: Layout Grid) --- */}
      <section id="sobre" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Texto */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Sobre Mim</h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                Sou estudante de Desenvolvimento de Sistemas na ETEC Camargo Aranha. Minha paixão é criar interfaces que não são apenas funcionais, mas visualmente impactantes.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Atualmente, foco em aprofundar meus conhecimentos no ecossistema <strong>React, Next.js e TypeScript</strong>, buscando sempre as melhores práticas de Clean Code e UI/UX.
              </p>
            </div>

            {/* Skills (Visual Novo) */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm dark:bg-gray-900">
              <h3 className="font-bold text-xl mb-6 text-gray-800 dark:text-white">Habilidades</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill.name} 
                    className={`px-4 py-2 rounded-lg bg-white border border-gray-200 font-medium text-sm shadow-sm ${skill.color} dark:bg-gray-800 dark:border-gray-700`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PROJETOS (Gerado dinamicamente via Map) --- */}
      <section id="projetos" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Projetos em Destaque</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800"
              >
                {/* Imagem com Overlay ao passar o mouse */}
                <div className="relative h-48 overflow-hidden">
                   {/* Fallback de imagem se não tiver arquivo real ainda */}
                   <div className="absolute inset-0 bg-gray-200 animate-pulse" /> 
                   <Image 
                     src={proj.img} 
                     alt={proj.title}
                     fill
                     className="object-cover group-hover:scale-110 transition duration-500"
                   />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{proj.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 dark:text-gray-400">{proj.desc}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded dark:bg-blue-900/30 dark:text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={proj.link} 
                    target="_blank"
                    className="block w-full text-center py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER SIMPLIFICADO --- */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p className="mb-4 text-lg text-white font-semibold">Vamos construir algo juntos?</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://linkedin.com" className="hover:text-white transition">LinkedIn</a>
          <a href="https://instagram.com" className="hover:text-white transition">Instagram</a>
          <a href="mailto:vnbrandaoambrosio@gmail.com" className="hover:text-white transition">Email</a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Vinícius Brandão. Desenvolvido com Next.js & Tailwind.</p>
      </footer>

    </main>
  );
}
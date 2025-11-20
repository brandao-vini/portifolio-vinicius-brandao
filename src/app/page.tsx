// src/app/page.tsx
import Image from 'next/image';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function HomePage() {
  return (
    // Container principal: dark:bg-gray-900 e dark:text-gray-100 aplicados
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-100">

      {/* Navbar / Header */}
      <nav className="bg-white shadow-sm py-4 px-8 md:px-16 flex justify-between items-center border-b border-gray-100 dark:bg-gray-950 dark:border-gray-700">

        {/* Adicionado um espaço placeholder à esquerda para alinhar */}
        <div className="w-10"></div>

        <ul className="flex space-x-8">
          <li><a href="#sobre" className="text-gray-600 hover:text-blue-600 transition duration-300 dark:text-gray-300 dark:hover:text-blue-400">Sobre Mim</a></li>
          <li><a href="#projetos" className="text-gray-600 hover:text-blue-600 transition duration-300 dark:text-gray-300 dark:hover:text-blue-400">Projetos</a></li>
          <li><a href="#contato" className="text-gray-600 hover:text-blue-600 transition duration-300 dark:text-gray-300 dark:hover:text-blue-400">Contato</a></li>
        </ul>

        {/* 2. Botão de Switch de Tema */}
        <ThemeSwitch />
      </nav>

      {/* 1. SEÇÃO DE INTRODUÇÃO / HERO */}
      <section className="text-center py-20 px-4 md:px-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto my-12 dark:bg-gray-800 dark:shadow-xl">
        <Image
          src="/vini.jpg"
          alt="Foto do Desenvolvedor"
          width={180}
          height={180}
          className="rounded-full mx-auto mb-6 border-4 border-gray-100 shadow-md dark:border-gray-700"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight dark:text-white">Olá, eu sou Vinícius Brandão 👋</h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-600 max-w-2xl mx-auto dark:text-gray-400">Desenvolvedor Front-end | Apaixonado por Tecnologia!</p>
        <a
          href="#projetos"
          className="mt-8 inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg 
              hover:bg-blue-700 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 dark:shadow-blue-900/50"
        >
          Explorar Meus Projetos
        </a>
      </section>

      {/* 2. SEÇÃO SOBRE MIM */}
      <section id="sobre" className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8 bg-white shadow-md rounded-lg mb-12 dark:bg-gray-800 dark:shadow-xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center dark:text-white">Sobre Mim</h2>
        <div className="prose lg:prose-xl text-gray-700 leading-relaxed space-y-4 dark:text-gray-300">
          <p>
            Sou Vinícius Brandão, desenvolvedor em formação com foco em soluções web e mobile.
          </p>
          <p>
            Atualmente curso Desenvolvimento de Sistemas na ETEC Camargo Aranha, onde venho aprimorando minhas habilidades em lógica de programação, desenvolvimento front-end e integração de aplicações.
          </p>
          <p>
            Tenho experiência prática com HTML, CSS, JavaScript e TypeScript, além de utilizar PHP e Blade em projetos que exigem estrutura de backend e templating dinâmico.
          </p>
          <p>
            Busco constantemente evoluir como profissional, aplicando boas práticas de código, design responsivo e usabilidade em cada projeto. Meu objetivo é criar interfaces <strong className="text-blue-600 font-semibold dark:text-blue-400">modernas, funcionais e de alto desempenho</strong>, que ofereçam experiências digitais de qualidade para os usuários.
          </p>
        </div>
      </section>

      {/* 3. SEÇÃO DE PROJETOS */}
      <section id="projetos" className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8 bg-white shadow-md rounded-lg mb-12 dark:bg-gray-800 dark:shadow-xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center dark:text-white">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card de Projeto 1 (P5js) */}
          <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col dark:border-gray-700 dark:bg-gray-900">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 dark:text-white">Pequeno projeto interativo com JavaScript no P5js.</h3>
            <Image
              src="/projeto-p5js.jpg"
              alt="Miniatura do Projeto Interativo com P5js"
              width={400}
              height={250}
              className="rounded-md mb-4 object-cover"
            />
            <p className="text-gray-600 flex-grow mb-4 dark:text-gray-400">
              O projeto permite que os usuários desenhem livremente na tela, explorando a criatividade por meio de JavaScript. Com um ambiente dinâmico e intuitivo, ele oferece uma experiência envolvente.
            </p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">JavaScript</span>
              <a
                href="https://vinizinhoo.github.io/js-escritalivre/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold dark:text-blue-400 dark:hover:text-blue-300"
              >
                Ver Projeto &rarr;
              </a>
            </div>
          </div>

          {/* Card de Projeto 2 (Flashcards) */}
          <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col dark:border-gray-700 dark:bg-gray-900">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 dark:text-white">Flashcards: Um pequeno jogo de Quiz interativo</h3>
            <Image
              src="/projeto-flashcards.jpg"
              alt="Miniatura do Flashcards"
              width={400}
              height={250}
              className="rounded-md mb-4 object-cover"
            />
            <p className="text-gray-600 flex-grow mb-4 dark:text-gray-400">
              O Flashcards é um jogo de quiz interativo criado com HTML, CSS e JavaScript, permitindo que usuários testem seus conhecimentos através de cartões digitais.
            </p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">HTML, CSS, JavaScript</span>
              <a
                href="https://vinizinhoo.github.io/flashcards/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold dark:text-blue-400 dark:hover:text-blue-300"
              >
                Ver Projeto &rarr;
              </a>
            </div>
          </div>

          {/* Card de Projeto 3 (AluraPlus) */}
          <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col dark:border-gray-700 dark:bg-gray-900">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3 dark:text-white">AluraPlus: pequeno site com informações de combos da Alura!</h3>
            <Image
              src="/projeto-aluraplus.jpg"
              alt="Miniatura do Projeto AluraPlus"
              width={400}
              height={250}
              className="rounded-md mb-4 object-cover"
            />
            <p className="text-gray-600 flex-grow mb-4 dark:text-gray-400">
              O AluraPlus é um projeto desenvolvido que foi utilizado HTML e CSS. Ele apresenta informações sobre os combos da Alura, organizando detalhes de planos e benefícios de forma visualmente atraente.
            </p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">HTML, CSS</span>
              <a
                href="https://vinizinhoo.github.io/alura-plus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold dark:text-blue-400 dark:hover:text-blue-300"
              >
                Ver Projeto &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SEÇÃO DE CONTATO (COM BOTÕES DE AÇÃO) */}
      <section id="contato" className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8 bg-white shadow-md rounded-lg mb-12 text-center dark:bg-gray-800 dark:shadow-xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white">Vamos Conversar?</h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10 dark:text-gray-400">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
        </p>

        {/* Container para os Botões */}
        <div className="flex justify-center space-x-6">

          {/* Botão do Instagram */}
          <a
            href="https://www.instagram.com/brndx.vinii/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-pink-600 text-white font-semibold py-3 px-6 rounded-full 
              hover:bg-pink-700 transition duration-300 shadow-md
                  relative z-10"
          >
            {/* Ícone do Instagram (SVG) */}
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            Instagram
          </a>

          {/* Botão do LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vin%C3%ADcius-brand%C3%A3o-ambrosio-1b25b4257"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-full 
             hover:bg-blue-700 transition duration-300 shadow-md 
            relative z-10"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.444-2.136 2.939v5.667H9.27V9.75H12.9v1.648h.049c.519-.976 1.795-2.018 3.48-.992 3.626 0 4.286 2.684 4.286 6.157v6.78H20.447zM7.135 7.037c-1.336 0-2.19-.895-2.19-2.004 0-1.111.854-2.004 2.19-2.004 1.336 0 2.19.893 2.19 2.004 0 1.109-.854 2.004-2.19 2.004zM3.434 9.75H7.2V20.452H3.434V9.75z" /></svg>
            LinkedIn
          </a>

        </div>
      </section>

      {/* Footer - ESTAVA FORA DO MAIN */}
      <footer className="bg-gray-800 text-white py-8 text-center text-sm dark:bg-gray-950 dark:border-t dark:border-gray-700">
        <p>&copy; {new Date().getFullYear()} Vinícius Brandão Ambrosio. Todos os direitos reservados.</p>
        <p className="mt-2">Feito com ❤️ e Next.js</p>
      </footer>

    </main>
  );
}
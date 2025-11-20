// src/app/page.tsx
import Image from 'next/image';

export default function HomePage() {
  return (
    // Container principal: background suave, padding responsivo
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* Navbar / Header (opcional - pode ser um componente separado) */}
      <nav className="bg-white shadow-sm py-4 px-8 md:px-16 flex justify-center border-b border-gray-100">
        <ul className="flex space-x-8">
          <li><a href="#sobre" className="text-gray-600 hover:text-blue-600 transition duration-300">Sobre Mim</a></li>
          <li><a href="#projetos" className="text-gray-600 hover:text-blue-600 transition duration-300">Projetos</a></li>
          <li><a href="#contato" className="text-gray-600 hover:text-blue-600 transition duration-300">Contato</a></li>
        </ul>
      </nav>

      {/* 1. SEÇÃO DE INTRODUÇÃO / HERO */}
      <section className="text-center py-20 px-4 md:px-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto my-12">
        <Image 
          src="/vini.jpg" // Lembre-se: sua-foto.jpg em /public
          alt="Foto do Desenvolvedor" 
          width={180} // Aumentei um pouco o tamanho
          height={180} 
          className="rounded-full mx-auto mb-6 border-4 border-gray-100 shadow-md"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">Olá, eu sou Vinícius Brandão 👋</h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-600 max-w-2xl mx-auto">Desenvolvedor Front-end | Apaixonado por Tecnologia!</p>
        <a 
          href="#projetos" 
          className="mt-8 inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg 
                     hover:bg-blue-700 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
        >
          Explorar Meus Projetos
        </a>
      </section>

      {/* 2. SEÇÃO SOBRE MIM */}
      <section id="sobre" className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8 bg-white shadow-md rounded-lg mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Sobre Mim</h2>
        <div className="prose lg:prose-xl text-gray-700 leading-relaxed space-y-4">
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
            Busco constantemente evoluir como profissional, aplicando boas práticas de código, design responsivo e usabilidade em cada projeto. Meu objetivo é criar interfaces <strong className="text-blue-600 font-semibold">modernas, funcionais e de alto desempenho</strong>, que ofereçam experiências digitais de qualidade para os usuários.
        </p>
        </div>
      </section>

      {/* 3. SEÇÃO DE PROJETOS */}
      <section id="projetos" className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8 bg-white shadow-md rounded-lg mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Exemplo de Card de Projeto 1 */}
          <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Pequeno projeto interativo com JavaScript no P5js.</h3>
            <Image 
              src="/projeto-p5js.jpg" // Crie esta imagem em public/imagens-projetos
              alt="Miniatura do Projeto Interativo com P5js" 
              width={400} 
              height={250} 
              className="rounded-md mb-4 object-cover"
            />
            <p className="text-gray-600 flex-grow mb-4">
              O projeto permite que os usuários desenhem livremente na tela, explorando a criatividade por meio de JavaScript. Com um ambiente dinâmico e intuitivo, ele oferece uma experiência envolvente, incentivando a experimentação artística e a interação direta com elementos visuais.
            </p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-sm font-medium text-blue-600">JavaScript</span>
              <a 
                href="https://vinizinhoo.github.io/js-escritalivre/" // LINK CORRETO AQUI
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold"
              >
            Ver Projeto &rarr;
              </a>
            </div>
          </div>

          {/* Exemplo de Card de Projeto 2 */}
          <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Flashcards: Um pequeno jogo de Quiz interativo</h3>
            <Image 
              src="/projeto-flashcards.jpg" // Crie esta imagem
              alt="Miniatura do Flashcards" 
              width={400} 
              height={250} 
              className="rounded-md mb-4 object-cover"
            />
            <p className="text-gray-600 flex-grow mb-4">
              O Flashcards é um jogo de quiz interativo criado com HTML, CSS e JavaScript, permitindo que usuários testem seus conhecimentos através de cartões digitais. Eles interagem com os flashcards para visualizar perguntas e respostas, tornando a experiência dinâmica.
            </p>
            <div className="mt-auto flex justify-between items-center">
              <span className="text-sm font-medium text-blue-600">HTML, CSS, JavaScript</span>
              <a 
                href="https://vinizinhoo.github.io/flashcards/" // LINK CORRETO AQUI
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 transition duration-300 font-semibold"
              >
                Ver Projeto &rarr;
              </a>
            </div>
          </div>

          {/* Adicione mais projetos aqui seguindo o mesmo padrão */}
          <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col justify-center items-center text-center text-gray-500">
             <span className="text-5xl mb-4">✨</span>
             <p className="text-lg">Mais projetos em breve...</p>
          </div>
        </div>
      </section>
      
      {/* 4. SEÇÃO DE CONTATO */}
      <section id="contato" className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8 bg-white shadow-md rounded-lg mb-12 text-center">
         <h2 className="text-4xl font-bold text-gray-800 mb-8">Vamos Conversar?</h2>
         <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
           Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
         </p>
         <div className="flex justify-center space-x-6">
            <a 
             href="mailto:vnbrandaoambrosio@gmail.com?subject=Contato%20via%20Portfólio%20(Vinícius%20Brandão)" 
             className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-full 
             hover:bg-blue-700 transition duration-300 shadow-md 
             relative z-10" 
            >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  Enviar Email
            </a>
            <a 
              href="https://www.linkedin.com/in/vin%C3%ADcius-brand%C3%A3o-ambrosio-1b25b4257" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-full 
                         hover:bg-gray-100 transition duration-300 shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.444-2.136 2.939v5.667H9.27V9.75H12.9v1.648h.049c.519-.976 1.795-2.018 3.48-.992 3.626 0 4.286 2.684 4.286 6.157v6.78H20.447zM7.135 7.037c-1.336 0-2.19-.895-2.19-2.004 0-1.111.854-2.004 2.19-2.004 1.336 0 2.19.893 2.19 2.004 0 1.109-.854 2.004-2.19 2.004zM3.434 9.75H7.2V20.452H3.434V9.75z"/></svg>
              LinkedIn
            </a>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Vinícius Brandão Ambrosio. Todos os direitos reservados.</p>
        <p className="mt-2">Feito com ❤️ e Next.js</p>
      </footer>

    </main>
  );
}
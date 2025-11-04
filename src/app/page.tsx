import Link from 'next/link';

export default function Home() {
  
  // Define a cor de destaque (Accent Color) - pode ser usada em outros lugares.
  // Para o botão, vamos usar cores fixas para garantir o contraste.
  const accentColor = 'blue-700'; 

  return (
    // O div principal tem o fundo bg-gray-50 e é centralizado como um 'card'
    <div className="container mx-auto px-4 max-w-5xl bg-gray-50 rounded-xl shadow-lg my-8">
      
      {/* 🌟 HERO SECTION - Centralizada e com tipografia de destaque */}
      {/* pt-16 (padding top) para dar respiro interno. */}
      <section className="pt-16 pb-16 text-center">
        
        {/* Título Principal */}
        <h1 className="text-6xl md:text-8xl font-extrabold mb-3 leading-none tracking-tight text-gray-900">
          Vinícius Brandão
        </h1>
        
        {/* Subtítulo */}
        <h2 className={`text-xl md:text-3xl text-gray-600 font-light mb-8`}>
          Desenvolvedor Web/Mobile
        </h2>

        {/* Linha Divisória Sutil na cor de destaque azul */}
        <div className={`w-24 h-1 bg-${accentColor} mx-auto mb-10 rounded-full`}></div>
        
        {/* Botão de Destaque (CTA) - AGORA COM CONTRASTE VISÍVEL */}
        <div className="mt-10">
            <Link 
              href="/projects" 
              // Fundo do botão agora é um cinza escuro para alto contraste
              className={`inline-block px-8 py-4 bg-gray-800 text-white text-lg font-medium uppercase tracking-widest hover:bg-gray-700 transition duration-300 rounded-lg shadow-xl shadow-blue-400/50`} 
              // Sombra de um azul mais claro para destacar contra o fundo cinza claro da página
            >
                VER PROJETOS
            </Link>
        </div>
      </section>

      {/* 🤝 SOBRE MIM / DETALHES PESSOAIS - Classe principal: py-16 text-center */}
      <section className="py-16 text-center border-t border-gray-200">
        
        {/* Título da Seção */}
        <h3 className="text-3xl font-bold mb-12 text-gray-800">
            Sobre Mim
        </h3>

        {/* Bloco de Conteúdo (Alinhado à esquerda para melhor leitura do parágrafo) */}
        <div className="max-w-3xl mx-auto text-left space-y-6 text-lg text-gray-700">
            <p>
                Sou Vinícius Brandão, desenvolvedor em formação com foco em soluções web e mobile. Atualmente curso Desenvolvimento de Sistemas na ETEC Camargo Aranha, onde venho aprimorando minhas habilidades em lógica de programação, desenvolvimento front-end e integração de aplicações.
            </p>
            <p>
                Tenho experiência prática com HTML, CSS, JavaScript e TypeScript, além de utilizar PHP e Blade em projetos que exigem estrutura de backend e templating dinâmico.
            </p>
            <p>
                Busco constantemente evoluir como profissional, aplicando boas práticas de código, design responsivo e usabilidade em cada projeto. Meu objetivo é criar interfaces <strong className={`text-${accentColor} font-semibold`}>modernas, funcionais e de alto desempenho</strong>, que ofereçam experiências digitais de qualidade para os usuários.
            </p>
        </div>
        
        {/* Detalhes de Contato/Localização - Minimalista e Separado */}
        <div className="mt-12 pt-6 border-t border-gray-300 max-w-lg mx-auto text-base text-gray-500 space-y-2">
            <p className="flex items-center justify-center space-x-2">
                <span className={`text-${accentColor} font-bold text-xl`}>📍</span>
                <span>São Paulo, Brasil</span>
            </p>
            <p className="flex items-center justify-center space-x-2">
                <span className={`text-${accentColor} font-bold text-xl`}>📧</span>
                <a href="mailto:vnbrandaoambrosio@gmail.com" className={`hover:text-${accentColor} transition`}>vnbrandaoambrosio@gmail.com</a>
            </p>
        </div>
      </section>
      
    </div>
  );
}

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#EFEFF6] text-slate-700 font-sans pt-16 pb-8 px-6 lg:px-12 border-t border-slate-200/50">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* BLOCO SUPERIOR: TRÊS PILARES COM SEPARADORES */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 max-w-3xl mx-auto">
          
          {/* Pilar 1: CUIDADO */}
          <div className="flex-1 flex flex-col items-center gap-2 text-center">
            <svg className="w-5 h-5 text-[#6C5CE7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#6C5CE7] uppercase">
              CUIDADO
            </span>
          </div>

          <div className="hidden md:block w-px h-8 bg-slate-300/60" />

          {/* Pilar 2: SEGURANÇA */}
          <div className="flex-1 flex flex-col items-center gap-2 text-center">
            <svg className="w-5 h-5 text-[#6C5CE7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#6C5CE7] uppercase">
              SEGURANÇA
            </span>
          </div>

          <div className="hidden md:block w-px h-8 bg-slate-300/60" />

          {/* Pilar 3: TECNOLOGIA */}
          <div className="flex-1 flex flex-col items-center gap-2 text-center">
            <svg className="w-5 h-5 text-[#6C5CE7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-semibold tracking-[0.2em] text-[#6C5CE7] uppercase">
              TECNOLOGIA
            </span>
          </div>

        </div>

        {/* BLOCO CENTRAL*/}
        <div className="text-center space-y-4 max-w-2xl mx-auto pt-4">
          
          {/* Logo */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full border border-purple-200 flex items-center justify-center bg-white shadow-sm">
              <svg className="w-8 h-8 text-[#6C5CE7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>

          {/* Nome Principal */}
          <h2 className="font-serif text-2xl md:text-3xl text-slate-800 tracking-wide font-normal uppercase">
            ENFA. GABRIELA YARYD
          </h2>

          {/* Subtítulo / Especialidade */}
          <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed max-w-lg mx-auto">
            Especialista em Centro Cirúrgico e Cuidados Pós-Operatórios<br className="hidden sm:inline" /> em Cirurgia Plástica
          </p>
        </div>

        {/* NAVEGAÇÃO DE LINKS */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium pt-2">
          <a href="#inicio" className="hover:text-[#6C5CE7] transition-colors">Início</a>
          <a href="#sobre" className="hover:text-[#6C5CE7] transition-colors">Sobre</a>
          <a href="#atendimentos" className="hover:text-[#6C5CE7] transition-colors">Atendimentos</a>
          <a href="#contato" className="hover:text-[#6C5CE7] transition-colors">Contato</a>
          <a href="#politica" className="hover:text-[#6C5CE7] transition-colors">Política de Privacidade</a>
        </nav>

        {/* DIVISOR */}
        <div className="relative flex items-center justify-center pt-2">
          <div className="w-full max-w-xl border-t border-slate-300/60"></div>
          <div className="absolute bg-[#EFEFF6] px-3">
            <svg className="w-4 h-4 text-[#6C5CE7]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* RODAPÉ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-slate-500">
          <p className="text-[11px] text-center sm:text-left text-slate-500 font-normal">
            © 2026 Enfa. Gabriela Yaryd. Todos os direitos reservados.
          </p>

          {/* Ícones de Redes Sociais */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-[#6C5CE7] hover:shadow-md transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-[#6C5CE7] hover:shadow-md transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:contato@exemplo.com"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-[#6C5CE7] hover:shadow-md transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
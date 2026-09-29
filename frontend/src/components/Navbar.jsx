import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo e Nome */}
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Logo Gabriela Yaryd" 
            className="h-10 w-auto object-contain"
          />
          <span className="font-semibold text-slate-800 text-sm tracking-wide uppercase">
            ENFA. GABRIELA YARYD
          </span>
        </div>

        {/* Links de Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#inicio" className="hover:text-purple-700 transition-colors">Início</a>
          <a href="#sobre" className="hover:text-purple-700 transition-colors">Sobre</a>
          <a href="#atendimentos" className="hover:text-purple-700 transition-colors">Atendimentos</a>
          <a href="#como-funciona" className="hover:text-purple-700 transition-colors">Como Funciona</a>
          <a href="#depoimentos" className="hover:text-purple-700 transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-purple-700 transition-colors">Contato</a>
        </nav>

        {/* Botão de Destaque */}
        <div>
          <a
            href="#agendamento"
            className="inline-flex items-center gap-2 border border-purple-600 text-purple-700 hover:bg-purple-700 hover:text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300"
          >
            <span>Solicitar atendimento</span>
          </a>
        </div>
      </div>
    </header>
  );
}
import React from 'react';
import { Heart } from 'lucide-react';
import logo from '../assets/logo.png'; 

export default function Navbar() {
  return (
    <header className="w-full bg-[#FDFBFD]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logótipo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Enfa. Gabriela Yaryd" className="h-10 w-auto object-contain" />
        </div>

        {/* Links de Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-500">
          <a href="#inicio" className="hover:text-slate-900 transition-colors">Início</a>
          <a href="#sobre" className="hover:text-slate-900 transition-colors">Sobre</a>
          <a href="#atendimentos" className="hover:text-slate-900 transition-colors">Atendimentos</a>
          <a href="#como-funciona" className="hover:text-slate-900 transition-colors">Como funciona</a>
          <a href="#depoimentos" className="hover:text-slate-900 transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-slate-900 transition-colors">Contato</a>
        </nav>

        {/* Botão do Canto Superior Direito */}
        <a
          href="#contato"
          className="inline-flex items-center gap-2 bg-[#5B63D3] hover:bg-[#4a51be] text-white text-xs font-medium px-5 py-2.5 rounded-full shadow-sm transition-all"
        >
          <Heart className="w-3.5 h-3.5 stroke-[2]" />
          <span>Solicitar atendimento</span>
        </a>
      </div>
    </header>
  );
}
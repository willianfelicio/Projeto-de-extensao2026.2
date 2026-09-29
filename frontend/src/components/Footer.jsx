import React from 'react';
import logo from '../assets/logo.png'; // Ajuste se o logo estiver em outro caminho

export default function Footer() {
  return (
    <footer id="contato" className="bg-slate-50 border-t border-slate-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Pilares com Ícones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-slate-200 text-center">
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl mb-2">💜</span>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-700">Cuidado</h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl mb-2">🛡️</span>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-700">Segurança</h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-2xl mb-2">✨</span>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-700">Tecnologia</h4>
          </div>
        </div>

        {/* Informações Principais */}
        <div className="py-12 flex flex-col items-center text-center">
          <img src={logo} alt="Logo Gabriela Yaryd" className="h-10 w-auto mb-4 object-contain" />
          
          <h3 className="font-serif font-bold text-base text-slate-800 tracking-wide uppercase">
            ENFA. GABRIELA YARYD
          </h3>
          <p className="text-xs text-slate-500 mt-1 max-w-md">
            Especialista em Centro Cirúrgico e Cuidados Pós-Operatórios em Cirurgia Plástica.
          </p>

          {/* Links de Navegação */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs text-slate-600">
            <a href="#inicio" className="hover:text-purple-700 transition-colors">Início</a>
            <a href="#sobre" className="hover:text-purple-700 transition-colors">Sobre</a>
            <a href="#atendimentos" className="hover:text-purple-700 transition-colors">Atendimentos</a>
            <a href="#como-funciona" className="hover:text-purple-700 transition-colors">Como Funciona</a>
            <a href="#depoimentos" className="hover:text-purple-700 transition-colors">Depoimentos</a>
            <a href="#contato" className="hover:text-purple-700 transition-colors">Contato</a>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="border-t border-slate-200 pt-8 text-center text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Enfa. Gabriela Yaryd. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
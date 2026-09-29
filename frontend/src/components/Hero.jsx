import React from 'react';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import heroImg from '../assets/gabriela-hero.png'; // Confirma o nome do ficheiro da foto

export default function HeroSection() {
  return (
    <main id="inicio" className="w-full bg-[#FDFBFD] text-slate-700 font-sans pb-16 pt-8 lg:pt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LADO ESQUERDO: TEXTOS E BOTÕES */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Subtítulo com linha */}
          <div className="flex items-center gap-3 text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
            <span className="w-6 h-[1.5px] bg-slate-400"></span>
            <span>ENFA. GABRIELA YARYD</span>
          </div>

          {/* Título Serifado */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.18] tracking-tight">
            Um cuidado especializado para acompanhar você em{' '}
            <span className="font-normal italic text-[#5B63D3]">cada etapa</span> da sua recuperação.
          </h1>

          {/* Parágrafo de descrição */}
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-lg pt-1">
            Cuidados pré e pós-operatórios em cirurgia plástica, com experiência, segurança, tecnologia e acolhimento.
          </p>

          {/* Grupo de Botões */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Botão Principal com Gradiente Azul/Roxo */}
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#5B63D3] to-[#4285F4] hover:opacity-95 text-white text-xs font-medium px-6 py-3.5 rounded-full shadow-md shadow-indigo-100 transition-all"
            >
              <Heart className="w-4 h-4 stroke-[2]" />
              <span>Quero solicitar atendimento</span>
            </a>

            {/* Botão Secundário Branco */}
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-3 bg-white text-slate-600 border border-slate-200 hover:border-slate-300 text-xs font-medium px-6 py-3.5 rounded-full shadow-sm transition-all"
            >
              <span>Conheça meu trabalho</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Tag de Status Personalizado */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 bg-[#F2F0FF] text-[#5B63D3] px-3.5 py-1.5 rounded-full text-[11px] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#5B63D3]" />
              <Sparkles className="w-3 h-3 text-[#5B63D3]" />
              <span>Atendimento personalizado disponível</span>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: FOTO E BADGE DE ANOS */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          
          {/* Card da Foto */}
          <div className="relative w-full max-w-[400px] rounded-[36px] overflow-hidden bg-[#121214] shadow-2xl">
            <img
              src={heroImg}
              alt="Enfermeira Gabriela Yaryd"
              className="w-full h-[460px] sm:h-[500px] object-cover object-center opacity-90"
            />
          </div>

          {/* Badge Flutuante de Anos de Experiência */}
          <div className="absolute bottom-4 left-4 sm:left-6 bg-white/85 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-lg border border-white/60 flex flex-col justify-center">
            <span className="text-2xl font-serif font-light text-[#5B63D3] leading-none mb-1">
              13
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide">
              anos de experiência
            </span>
          </div>

        </div>

      </div>
    </main>
  );
}
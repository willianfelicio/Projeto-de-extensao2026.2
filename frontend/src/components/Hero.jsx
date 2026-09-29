import React from 'react';
import fotoHero from '../assets/gabriela-hero.png';

export default function Hero() {
  return (
    <section id="inicio" className="py-16 md:py-24 bg-gradient-to-b from-purple-50/40 to-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Coluna de Texto */}
        <div className="md:w-1/2">
          <span className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-4 block">
            ENFA. GABRIELA YARYD
          </span>
          
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight mb-6">
            Um cuidado especializado para acompanhar você em{' '}
            <span className="italic font-normal text-purple-700">cada etapa</span> da sua recuperação.
          </h1>
          
          <p className="text-slate-600 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
            Cuidados pré e pós-operatórios em cirurgia plástica, com experiência, segurança, tecnologia e acolhimento.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
            <a
              href="#agendamento"
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3.5 rounded-2xl shadow-lg shadow-purple-200 transition-all text-center text-sm"
            >
              Quero solicitar atendimento
            </a>
            <a
              href="#sobre"
              className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium px-6 py-3.5 rounded-2xl transition-all text-center text-sm"
            >
              Conheça meu trabalho →
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Atendimento personalizado disponível</span>
          </div>
        </div>

        {/* Coluna da Imagem com Card Flutuante */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative">
            <img
              src={fotoHero}
              alt="Enfermeira Gabriela Yaryd"
              className="rounded-3xl shadow-2xl w-full max-w-md h-auto object-cover border-4 border-white"
            />
            
            {/* Card de Anos de Experiência */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <span className="text-3xl font-bold text-purple-700">13</span>
              <div className="text-xs text-slate-600 leading-tight">
                <span className="font-semibold block">anos de</span>
                <span>experiência</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
import React from 'react';
import fotoSobre from '../assets/gabriela-sobre.png';

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Parte Superior: Foto + História */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          
          {/* Foto com Assinatura */}
          <div className="md:w-5/12 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <img
                src={fotoSobre}
                alt="Dra. Gabriela Yaryd"
                className="rounded-3xl shadow-xl w-full h-auto object-cover border-4 border-purple-50/50"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-serif text-xl font-bold text-slate-800">Gabriela Yaryd</h3>
              <p className="text-xs uppercase tracking-widest text-purple-600 font-medium mt-1">
                ENFERMEIRA ESPECIALISTA
              </p>
            </div>
          </div>

          {/* Texto Biográfico */}
          <div className="md:w-7/12">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-3 block">
              SOBRE A GABRIELA
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 leading-snug mb-6">
              Um cuidado que <span className="italic font-normal text-purple-700">acolhe</span>, orienta e traz segurança.
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                Sou enfermeira especialista em Centro Cirúrgico e em Cuidados Pós-Operatórios de Cirurgia Plástica. Há 13 anos, escolhi dedicar minha trajetória ao cuidado de pacientes cirúrgicos e, há 6 anos, encontrei na cirurgia plástica uma área que me despertou ainda mais paixão.
              </p>
              <p>
                Sempre fui fascinada pelo processo cirúrgico como um todo, mas, principalmente, pelo cuidar. Acredito que receber uma pessoa em um momento tão delicado e poder oferecer a ela segurança, tranquilidade e acolhimento é uma das partes mais especiais da minha profissão.
              </p>
              <p>
                Quando uma pessoa decide realizar uma cirurgia plástica, este muito mais do que um procedimento. Existem sonhos, expectativas e, muitas vezes, uma grande ansiedade sobre tudo o que está por vir.
              </p>
              <p className="font-semibold text-slate-800">
                E quando a cirurgia termina, começa uma nova etapa.
              </p>
              <p>
                É nesse momento que podem surgir o medo, a insegurança, a dor, o edema, os drenos, os curativos e tantas dúvidas. Por isso, acredito que ninguém deveria passar por esse período se sentindo sozinho.
              </p>
              <p>
                Meu propósito é estar presente para cuidar, orientar, acolher e trazer segurança durante toda essa jornada.
              </p>
            </div>

            {/* Quote Card */}
            <div className="mt-8 bg-purple-50/60 border border-purple-100 rounded-2xl p-4 flex items-center justify-center text-center">
              <p className="text-purple-900 font-medium italic text-sm">
                💜 "Cuidar é todo processo – do primeiro contato à recuperação completa."
              </p>
            </div>
          </div>
        </div>

        {/* Parte Inferior: Trajetória dedicada ao cuidar */}
        <div className="border-t border-slate-100 pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-2 block">
              EXPERIÊNCIA & ESPECIALIZAÇÃO
            </span>
            <h3 className="text-3xl font-serif text-slate-900">
              Trajetória dedicada ao <span className="italic font-normal text-purple-700">cuidar</span>
            </h3>
          </div>

          {/* Números e Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-50/70 rounded-2xl p-8 border border-slate-100 text-center flex flex-col items-center justify-center">
              <span className="text-6xl font-serif font-bold text-purple-700 mb-2">13</span>
              <p className="text-sm font-medium text-slate-600">anos de experiência na área cirúrgica</p>
            </div>

            <div className="bg-slate-50/70 rounded-2xl p-8 border border-slate-100 text-center flex flex-col items-center justify-center">
              <span className="text-6xl font-serif font-bold text-purple-700 mb-2">6</span>
              <p className="text-sm font-medium text-slate-600">anos de atuação em cirurgia plástica</p>
            </div>
          </div>

          {/* Cards de Pilares de Atuação */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold shrink-0">
                🏥
              </div>
              <p className="text-xs font-semibold text-slate-700 leading-snug">Especialista em Centro Cirúrgico</p>
            </div>

            <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold shrink-0">
                🩺
              </div>
              <p className="text-xs font-semibold text-slate-700 leading-snug">Especialista em Cuidados Pós-Operatórios</p>
            </div>

            <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold shrink-0">
                👤
              </div>
              <p className="text-xs font-semibold text-slate-700 leading-snug">Atendimento Individualizado</p>
            </div>

            <div className="p-5 rounded-xl border border-slate-100 bg-white shadow-sm flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold shrink-0">
                🏠
              </div>
              <p className="text-xs font-semibold text-slate-700 leading-snug">Atendimento Domiciliar</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
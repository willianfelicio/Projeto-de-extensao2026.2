import React from 'react';
import { Heart, Award, ShieldCheck, User, Home } from 'lucide-react';
import sobreImg from '../assets/gabriela-sobre.png';

export default function Sobre() {
  // Array de destaques com ícones e textos
  const destaques = [
    {
      icon: Award,
      texto: "Especialista em Centro Cirúrgico",
    },
    {
      icon: ShieldCheck,
      texto: "Especialista em Cuidados Pós-Operatórios",
    },
    {
      icon: User,
      texto: "Atendimento individualizado",
    },
    {
      icon: Home,
      texto: "Atendimento domiciliar",
    },
  ];

  return (
    <>
      {/* SOBRE A GABRIELA */}
      <section id="sobre" className="w-full bg-[#FDFBFD] text-slate-700 font-sans py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* FOTO + ASSINATURA */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[380px] rounded-[32px] overflow-hidden bg-slate-900 shadow-xl mb-6">
              <img
                src={sobreImg}
                alt="Gabriela Yaryd"
                className="w-full h-[420px] sm:h-[460px] object-cover object-center"
              />
            </div>

            <div className="text-center space-y-1">
              <span className="font-serif italic text-3xl sm:text-4xl text-[#5B63D3] block tracking-wide">
                Gabriela Yaryd
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase block">
                ENFERMEIRA ESPECIALISTA
              </span>
            </div>
          </div>

          {/* CONTEÚDO TEXTUAL */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            <div className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
              SOBRE A GABRIELA
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-[1.2] tracking-tight">
              Um cuidado que <span className="font-normal italic text-[#5B63D3]">acolhe</span>, orienta e traz segurança.
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
              <p>
                Sou enfermeira especialista em Centro Cirúrgico e em Cuidados Pós-Operatórios de Cirurgia Plástica. Há 13 anos, escolhi dedicar minha trajetória ao cuidado de pacientes cirúrgicos e, há 6 anos, encontrei na cirurgia plástica uma área que me despertou ainda mais paixão.
              </p>
              <p>
                Sempre fui fascinada pelo processo cirúrgico como um todo, mas, principalmente, pelo cuidar. Acredito que receber uma pessoa em um momento tão delicado e poder oferecer a ela segurança, tranquilidade e acolhimento é uma das partes mais especiais da minha profissão.
              </p>
              <p>
                Quando uma pessoa decide realizar uma cirurgia plástica, existe muito mais do que um procedimento. Existem sonhos, expectativas e, muitas vezes, uma grande ansiedade sobre tudo o que está por vir.
              </p>
            </div>

            <p className="font-serif italic text-base sm:text-lg text-[#5B63D3] pt-2">
              E quando a cirurgia termina, começa uma nova etapa.
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
              <p>
                É nesse momento que podem surgir o medo, a insegurança, a dor, o edema, os drenos, os curativos e tantas dúvidas. Por isso, acredito que ninguém deveria passar por esse período se sentindo sozinho.
              </p>
              <p>
                Meu propósito é estar presente para cuidar, orientar, acolher e trazer segurança durante essa jornada.
              </p>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-3 bg-[#F2F0FF] px-5 py-3.5 rounded-2xl w-full sm:w-auto">
                <div className="w-8 h-8 rounded-full bg-[#5B63D3] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="font-serif italic text-xs sm:text-sm text-[#5B63D3]">
                  "Cuidar é estar presente — do primeiro contato à recuperação completa."
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* EXPERIÊNCIA + ESPECIALIZAÇÃO */}
      <section className="w-full bg-[#EEF2F7] text-slate-700 font-sans py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* CABEÇALHO */}
          <div className="text-center space-y-3">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#5B63D3] uppercase block">
              EXPERIÊNCIA & ESPECIALIZAÇÃO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight">
              Trajetória dedicada ao <span className="font-normal italic text-[#5B63D3]">cuidar</span>
            </h2>
          </div>

          {/* MÉTRICAS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="relative inline-block pb-3 mb-3">
                <span className="text-7xl sm:text-8xl font-serif font-light text-[#5B63D3] leading-none">
                  13
                </span>
                <div className="w-12 h-[1px] bg-[#5B63D3]/40 absolute bottom-0 left-1/2 -translate-x-1/2" />
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                anos de experiência na área cirúrgica
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative inline-block pb-3 mb-3">
                <span className="text-7xl sm:text-8xl font-serif font-light text-[#5B63D3] leading-none">
                  6
                </span>
                <div className="w-12 h-[1px] bg-[#5B63D3]/40 absolute bottom-0 left-1/2 -translate-x-1/2" />
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                anos de atuação em cirurgia plástica
              </p>
            </div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {destaques.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 flex flex-col items-start justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F0EEFF] flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-[#5B63D3]" />
                  </div>
                  <p className="text-xs font-medium text-slate-600 leading-relaxed">
                    {item.texto}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
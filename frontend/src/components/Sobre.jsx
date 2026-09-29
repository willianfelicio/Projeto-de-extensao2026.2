import React from 'react';
import fotoGabriela from '../assets/gabriela-sobre.png'; // Ajuste o nome/caminho da foto em src/assets se necessário

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Tag Superior */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
            SOBRE A GABRIELA
          </span>
        </div>

        {/* Grid Lado a Lado (Foto à esquerda, Texto à direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Coluna da Esquerda: Foto */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md">
            <div className="overflow-hidden rounded-3xl shadow-xl bg-white p-2 border border-slate-100">
              <img 
                src={fotoGabriela} 
                alt="Enfermeira Gabriela Yaryd" 
                className="w-full h-[450px] object-cover rounded-2xl"
              />
              <div className="p-4 text-center">
                <h3 className="font-serif font-bold text-xl text-slate-800">Gabriela Yaryd</h3>
                <p className="text-xs font-semibold text-purple-700 uppercase tracking-wider mt-1">
                  ENFERMEIRA ESPECIALISTA
                </p>
              </div>
            </div>
          </div>

          {/* Coluna da Direita: Texto */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
              Um cuidado que <span className="font-serif italic text-purple-700">acolhe</span>, orienta e traz segurança.
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Sou enfermeira especialista em Centro Cirúrgico e em Cuidados Pós-Operatórios de Cirurgia Plástica. Há 13 anos, decidi dedicar minha trajetória ao cuidado de pacientes cirúrgicos e, há 6 anos, encontrei na cirurgia plástica uma área que me despertou ainda mais paixão.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Sempre fui fascinada pelo processo cirúrgico como um todo, mas, principalmente, pelo cuidar. Acredito que receber uma pessoa em um momento tão delicado é poder oferecer a ela segurança, tranquilidade e acolhimento — essa é uma das partes mais especiais da minha profissão.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Quando uma pessoa decide realizar uma cirurgia plástica, este é muito mais do que um procedimento. Existem sonhos, expectativas e, muitas vezes, uma grande ansiedade sobre tudo o que está por vir.
            </p>

            {/* Destaque / Citação */}
            <div className="p-4 rounded-xl bg-purple-50/60 border-l-4 border-purple-600 text-xs font-medium text-slate-700 italic">
              "Cuidar é estar presente — do primeiro contato à recuperação completa."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
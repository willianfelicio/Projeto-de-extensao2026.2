import React, { useState } from 'react';
import { Stethoscope, Users, HeartPulse, ChevronUp, ChevronDown } from 'lucide-react';

export default function Atendimentos() {
  // inicia como false para os cards começarem fechados
  const [expandCard1, setExpandCard1] = useState(false);
  const [expandCard3, setExpandCard3] = useState(false);

  const itensCard1 = [
    "Avaliação e acompanhamento pré-operatório",
    "Planejamento dos cuidados em conjunto com o cirurgião e sua equipe",
    "Acompanhamento no período imediato após a cirurgia",
    "Acompanhamento pós-operatório domiciliar",
    "Avaliação da evolução clínica e da recuperação",
    "Cuidados com feridas, incisões e curativos",
    "Higiene e banho assistido",
    "Controle e manejo da dor e do edema",
    "Laserterapia e fotobiomodulação",
    "Ultrassom terapêutico",
    "Taping funcional e linfático",
    "Orientações para uma recuperação mais segura e confortável",
    "Identificação precoce de possíveis intercorrências e comunicação com a equipe médica",
    "Acompanhamento pós-operatório tardio"
  ];

  const itensCard3 = [
    "Curativos simples e complexos",
    "Administração de medicamentos prescritos",
    "Cuidados relacionados à cicatrização",
    "Retirada de pontos, quando indicada",
    "Avaliação de enfermagem",
    "Cuidados com feridas e dispositivos",
    "Higiene e cuidados de conforto",
    "Orientações e acompanhamento domiciliar",
    "Outros procedimentos de enfermagem conforme avaliação e indicação"
  ];

  return (
    <section id="atendimentos" className="w-full bg-[#FDFBFD] text-slate-700 font-sans py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* CABEÇALHO CENTRALIZADO */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          {/* Subtítulo com linhas laterais */}
          <div className="flex items-center justify-center gap-4 text-[10px] font-semibold tracking-[0.25em] text-[#5B63D3] uppercase">
            <span className="w-8 h-[1px] bg-[#5B63D3]/40" />
            <span>MEUS ATENDIMENTOS</span>
            <span className="w-8 h-[1px] bg-[#5B63D3]/40" />
          </div>

          {/* Título Principal */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-[1.2] tracking-tight">
            Cuidados pensados para <span className="font-normal italic text-[#5B63D3]">cada momento</span> da sua jornada
          </h2>
        </div>

        {/* 3 CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* CARD 1 */}
          <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-6">
            {/* Ícone */}
            <div className="w-12 h-12 rounded-2xl bg-[#5B63D3] text-white flex items-center justify-center shadow-md shadow-indigo-100">
              <Stethoscope className="w-6 h-6 stroke-[1.8]" />
            </div>

            {/* Título */}
            <h3 className="text-xl sm:text-2xl font-serif text-slate-900 leading-snug">
              Cuidados Pré e Pós-Operatórios em Cirurgia Plástica
            </h3>

            {/* Descrição Curta */}
            <p className="text-xs text-slate-500 leading-relaxed">
              Acompanhamento especializado e individualizado para pacientes de cirurgia plástica, com foco em segurança, conforto, recuperação e prevenção de complicações.
            </p>

            {/* Botão Ver mais */}
            <div>
              <button
                onClick={() => setExpandCard1(!expandCard1)}
                className="inline-flex items-center gap-1.5 bg-[#F2F0FF] text-[#5B63D3] px-3.5 py-1.5 rounded-full text-[11px] font-medium hover:bg-[#e6e2ff] transition-colors"
              >
                <span>{expandCard1 ? "Ver menos" : "Ver mais"}</span>
                {expandCard1 ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Lista com Bullet Points */}
            {expandCard1 && (
              <ul className="space-y-3 pt-2">
                {itensCard1.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-slate-500 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B63D3] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-6">
            {/* Ícone */}
            <div className="w-12 h-12 rounded-2xl bg-[#5B63D3] text-white flex items-center justify-center shadow-md shadow-indigo-100">
              <Users className="w-6 h-6 stroke-[1.8]" />
            </div>

            {/* Título */}
            <h3 className="text-xl sm:text-2xl font-serif text-slate-900 leading-snug">
              Parceria com a equipe médica
            </h3>

            {/* Descrição */}
            <p className="text-xs text-slate-500 leading-relaxed">
              Meu trabalho é realizado de forma integrada e colaborativa com o cirurgião e sua equipe, mantendo uma comunicação próxima durante a recuperação do paciente.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-[28px] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-6">
            {/* Ícone */}
            <div className="w-12 h-12 rounded-2xl bg-[#5B63D3] text-white flex items-center justify-center shadow-md shadow-indigo-100">
              <HeartPulse className="w-6 h-6 stroke-[1.8]" />
            </div>

            {/* Título */}
            <h3 className="text-xl sm:text-2xl font-serif text-slate-900 leading-snug">
              Cuidados de Enfermagem Personalizados
            </h3>

            {/* Botão Ver mais  */}
            <div>
              <button
                onClick={() => setExpandCard3(!expandCard3)}
                className="inline-flex items-center gap-1.5 bg-[#F2F0FF] text-[#5B63D3] px-3.5 py-1.5 rounded-full text-[11px] font-medium hover:bg-[#e6e2ff] transition-colors"
              >
                <span>{expandCard3 ? "Ver menos" : "Ver mais"}</span>
                {expandCard3 ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Lista com Bullet Points */}
            {expandCard3 && (
              <ul className="space-y-3 pt-1">
                {itensCard3.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-slate-500 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5B63D3] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
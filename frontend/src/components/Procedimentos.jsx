import React, { useState } from 'react';

export default function Procedimentos() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const cards = [
    {
      title: "Cuidados Pré e Pós-Operatórios em Cirurgia Plástica",
      description: "Acompanhamento especializado e individualizado para pacientes de cirurgia plástica, com foco em segurança, conforto, recuperação e prevenção de complicações.",
      details: [
        "Avaliação e acompanhamento pré-operatório",
        "Planejamento dos cuidados em conjunto com a cirurgiã e sua equipe",
        "Atendimento no período imediato após a cirurgia",
        "Cuidados com feridas, incisões e curativos",
        "Avaliação da evolução clínica e da recuperação",
        "Higiene e banho assistido",
        "Controle e manejo da dor e do edema",
        "Laserterapia e fotobiomodulação",
        "Ultrassom terapêutico",
        "Taping funcional e linfático",
        "Orientações para uma recuperação mais segura e confortável",
        "Identificação precoce de possíveis intercorrências e comunicação com a equipe médica",
        "Acompanhamento pós-operatório tardio"
      ]
    },
    {
      title: "Parceria com a equipe médica",
      description: "Meu trabalho é realizado de forma integrada e colaborativa com o cirurgião e suas equipes, mantendo uma comunicação próxima durante a recuperação do paciente.",
      details: [
        "Comunicação direta com o cirurgião responsável",
        "Alinhamento dos protocolos pós-operatórios",
        "Relatórios de evolução do paciente",
        "Suporte em intercorrências com orientação médica"
      ]
    },
    {
      title: "Cuidados de Enfermagem Personalizados",
      description: "Serviços específicos de enfermagem prestados com excelência e segurança no conforto do seu lar.",
      details: [
        "Curativos simples e complexos",
        "Administração de medicamentos prescritos",
        "Retirada de pontos, quando indicado",
        "Cuidados relacionados à ostomia",
        "Avaliação de enfermagem",
        "Cuidados com feridas e drenos",
        "Higiene e cuidados de conforto",
        "Outros procedimentos de enfermagem conforme avaliação e indicação"
      ]
    }
  ];

  return (
    <section id="atendimentos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-2 block">
            MEUS ATENDIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900">
            Cuidados pensados para <span className="italic font-normal text-purple-700">cada momento</span> da sua jornada
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-4 leading-snug">
                {card.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {card.description}
              </p>

              <button
                onClick={() => toggleCard(index)}
                className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1 transition-colors uppercase tracking-wider mb-4 cursor-pointer"
              >
                <span>{openCard === index ? "Ocultar detalhes" : "Ver detalhes"}</span>
                <span>{openCard === index ? "▲" : "▼"}</span>
              </button>

              {openCard === index && (
                <ul className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                  {card.details.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
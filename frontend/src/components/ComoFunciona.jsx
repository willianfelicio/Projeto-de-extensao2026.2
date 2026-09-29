import React from 'react';

export default function ComoFunciona() {
  const steps = [
    {
      num: '01',
      title: 'Primeiro contato',
      desc: 'Você envia sua solicitação. Recebo suas informações com todo cuidado e sigilo.'
    },
    {
      num: '02',
      title: 'Avaliação das necessidades',
      desc: 'Entendo seu momento, seu procedimento e suas necessidades específicas.'
    },
    {
      num: '03',
      title: 'Planejamento dos cuidados',
      desc: 'Construo um plano de cuidados individualizado, em alinhamento com a equipe médica.'
    },
    {
      num: '04',
      title: 'Acompanhamento',
      desc: 'Estou presente nos cuidados, orientações e no suporte durante a sua recuperação.'
    },
    {
      num: '05',
      title: 'Evolução e suporte',
      desc: 'Acompanho sua evolução clínica até que você se sinta segura e recuperada.'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
            COMO FUNCIONA O ACOMPANHAMENTO
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-800 mt-4">
            Uma jornada <span className="font-serif italic text-purple-700">clara</span> e acolhedora
          </h2>
        </div>

        {/* Linha do Tempo Alternada */}
        <div className="relative">
          {/* Linha Central Guia */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-100 -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Lado Esquerdo */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 md:text-left'} text-center md:text-left`}>
                    <span className="font-serif text-3xl md:text-4xl font-bold text-purple-300 block mb-1">
                      {step.num}
                    </span>
                    <h3 className="font-bold text-slate-800 text-lg mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto md:mx-0">
                      {step.desc}
                    </p>
                  </div>

                  {/* Ponto na Linha Central */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-md z-10" />

                  {/* Lado Vazio para Equilíbrio */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-2' : 'order-1'}`} />

                </div>
              );
            })}
          </div>
        </div>

        {/* Frase Final */}
        <div className="mt-20 text-center">
          <p className="font-serif italic text-slate-600 text-sm max-w-2xl mx-auto border-t border-b border-slate-100 py-6">
            "Cada corpo tem seu tempo, cada cirurgia tem sua particularidade e cada paciente tem sua história."
          </p>
        </div>

      </div>
    </section>
  );
}
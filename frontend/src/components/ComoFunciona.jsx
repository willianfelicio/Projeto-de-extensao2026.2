import React from 'react';

export default function ComoFunciona() {
  const passos = [
    {
      numero: "01",
      titulo: "Primeiro contato",
      descricao: "Você envia sua solicitação. Recebo suas informações com todo cuidado e sigilo."
    },
    {
      numero: "02",
      titulo: "Avaliação das necessidades",
      descricao: "Entendo seu momento, seu procedimento e suas necessidades específicas."
    },
    {
      numero: "03",
      titulo: "Planejamento dos cuidados",
      descricao: "Construo um plano de cuidados individualizado, em alinhamento com a equipe médica."
    },
    {
      numero: "04",
      titulo: "Acompanhamento",
      descricao: "Estou presente nos cuidados, orientações e no suporte durante a sua recuperação."
    },
    {
      numero: "05",
      titulo: "Evolução e suporte",
      descricao: "Acompanho sua evolução clínica até que você se sinta segura e recuperada."
    }
  ];

  return (
    <section id="como-funciona" className="w-full bg-[#EEF2F7] text-slate-700 font-sans py-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* CABEÇALHO CENTRALIZADO */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-[10px] font-semibold tracking-[0.25em] text-[#5B63D3] uppercase">
            <span className="w-8 h-[1px] bg-[#5B63D3]/40" />
            <span>COMO FUNCIONA O ACOMPANHAMENTO</span>
            <span className="w-8 h-[1px] bg-[#5B63D3]/40" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight">
            Uma jornada <span className="font-normal italic text-[#5B63D3]">clara</span> e acolhedora
          </h2>
        </div>

        {/* TIMELINE (LINHA DO TEMPO) */}
        <div className="relative py-4">
          
          {/* Linha vertical central (no mobile fica à esquerda, no desktop ao centro) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#5B63D3]/20 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {passos.map((passo, index) => {
              const isEsquerda = index % 2 === 0; // 01, 03, 05 (índices 0, 2, 4)

              return (
                <div key={index} className="relative flex items-center w-full">
                  
                  {/* Ponto na linha temporal */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#5B63D3] ring-4 ring-[#EEF2F7] z-10" />

                  {/* ESTRUTURA PARA DESKTOP / MOBILE */}
                  <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    
                    {/* COLUNA ESQUERDA */}
                    <div className={`pl-14 md:pl-0 md:pr-16 md:text-right ${isEsquerda ? 'block' : 'hidden md:block md:invisible'}`}>
                      <div className="space-y-1">
                        <span className="font-serif text-3xl sm:text-4xl text-[#5B63D3]/70 block font-light">
                          {passo.numero}
                        </span>
                        <h3 className="text-base sm:text-lg font-serif text-slate-900 font-medium">
                          {passo.titulo}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-sm md:ml-auto">
                          {passo.descricao}
                        </p>
                      </div>
                    </div>

                    {/* COLUNA DIREITA */}
                    <div className={`pl-14 md:pl-16 md:text-left ${!isEsquerda ? 'block' : 'hidden md:block md:invisible'}`}>
                      <div className="space-y-1">
                        <span className="font-serif text-3xl sm:text-4xl text-[#5B63D3]/70 block font-light">
                          {passo.numero}
                        </span>
                        <h3 className="text-base sm:text-lg font-serif text-slate-900 font-medium">
                          {passo.titulo}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                          {passo.descricao}
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* CITAÇÃO FINAL */}
        <div className="text-center pt-8">
          <p className="font-serif italic text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            "Cada corpo tem seu tempo, cada cirurgia tem sua particularidade e cada paciente tem uma história."
          </p>
        </div>

      </div>
    </section>
  );
}
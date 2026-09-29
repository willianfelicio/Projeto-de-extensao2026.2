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
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-2 block">
            COMO FUNCIONA O ACOMPANHAMENTO
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900">
            Uma jornada <span className="italic font-normal text-purple-700">clara</span> e acolhedora
          </h2>
        </div>

        {/* Linha do Tempo / Passos */}
        <div className="space-y-10 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-ml-px before:w-0.5 before:bg-purple-100">
          {passos.map((passo, index) => (
            <div 
              key={index} 
              className={`relative flex items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Conteúdo do Card */}
              <div className="w-full md:w-1/2 pl-16 md:pl-0">
                <div className="bg-slate-50/80 p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <span className="text-2xl font-serif font-bold text-purple-600 mb-1 block">
                    {passo.numero}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-800 mb-2">
                    {passo.titulo}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {passo.descricao}
                  </p>
                </div>
              </div>

              {/* Ponto Central */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm z-10"></div>
            </div>
          ))}
        </div>

        {/* Citação em Destaque */}
        <div className="mt-20 text-center max-w-2xl mx-auto py-8 px-6 bg-purple-50/50 rounded-2xl border border-purple-100">
          <p className="text-slate-700 font-serif italic text-sm md:text-base leading-relaxed mb-3">
            "Cada corpo tem seu tempo, cada cirurgia tem sua particularidade e cada paciente tem sua história."
          </p>
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-600">
            ✨ UM CUIDADO QUE VAI ALÉM DA TÉCNICA
          </span>
        </div>

        {/* Manifesto de Trabalho */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif text-slate-900 mb-4">
            Meu trabalho une experiência, conhecimento, tecnologia e, acima de tudo, <span className="italic font-normal text-purple-700">humanidade</span>.
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed mb-2">
            Quero que cada paciente se sinta cuidado, ouvido e seguro. Que tenha alguém ao seu lado para responder suas dúvidas, observar sua evolução, orientar sua rede de apoio e tornar os primeiros dias — que podem ser tão delicados — mais tranquilos.
          </p>
          <span className="font-serif italic text-sm text-purple-800 font-medium">
            com cuidado, Gabriela
          </span>
        </div>

        {/* Card de Parceria Médica */}
        <div className="mt-16 bg-gradient-to-r from-purple-700 to-indigo-800 text-white rounded-3xl p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <span className="text-xs uppercase tracking-widest font-semibold text-purple-200 mb-3 block">
              🤝 EM PARCERIA COM CIRURGIÕES E EQUIPES MÉDICAS
            </span>
            <h4 className="text-2xl font-serif font-bold mb-4">
              Um cuidado construido em equipe
            </h4>
            <p className="text-xs text-purple-100 leading-relaxed">
              Também acredito na força de um cuidado construído em equipe. Por isso, busco estabelecer parcerias com cirurgiões plásticos e equipes médicas, mantendo uma comunicação próxima e respeitando as condutas e orientações do médico responsável.
            </p>
            <p className="text-xs text-purple-100 leading-relaxed mt-2">
              Meu objetivo é somar experiência e conhecimento ao trabalho da equipe, proporcionando ao paciente uma assistência mais próxima, integrada e segura.
            </p>
          </div>

          <div className="md:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center">
            <p className="text-xs italic text-purple-100 mb-4 leading-relaxed">
              "Somar cuidado, experiência e segurança à recuperação de cada paciente."
            </p>
            <a
              href="#contato"
              className="inline-block bg-white text-purple-800 text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-purple-50 transition-colors"
            >
              Sou cirurgião e quero conhecer o trabalho →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
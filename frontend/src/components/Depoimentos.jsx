import React from 'react';
import { Sparkles, ArrowRight, Stethoscope, Quote } from 'lucide-react';

export default function Depoimentos() {
  const depoimentos = [
    {
      texto: "Não sabia que existia um acompanhamento tão especializado para o pós-operatório. A Gabriela trouxe tecnologia, conhecimento e humanidade. Indispensável para quem passa por uma cirurgia plástica.",
      nome: "Carla R.",
      data: "19/09/2025",
      inicial: "C"
    },
    {
      texto: "Profissional excepcional. O cuidado com os curativos, a atenção às minhas dúvidas e o carinho fizeram toda a diferença nos meus primeiros dias em casa. Me senti segura o tempo todo.",
      nome: "Patrícia L.",
      data: "01/09/2025",
      inicial: "P"
    },
    {
      texto: "A Gabriela foi um anjo na minha recuperação. Tive medo de ficar sozinha depois da cirurgia, mas ela esteve presente em cada momento, orientando, cuidando e me tranquilizando. Recuperei muito mais rápido do que imaginava.",
      nome: "Mariana S.",
      data: "14/07/2025",
      inicial: "M"
    }
  ];

  return (
    <>
      {/* SEÇÃO SUPERIOR: HUMANIDADE & PARCERIA COM CIRURGIÕES */}
      <section className="w-full bg-[#FDFBFD] text-slate-700 font-sans py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* MANIFESTO / HUMANIDADE */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#F2F0FF] text-[#5B63D3] px-4 py-1.5 rounded-full text-[10px] font-semibold tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-[#5B63D3]" />
              <span>UM CUIDADO QUE VAI ALÉM DA TÉCNICA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-[1.2] tracking-tight">
              Meu trabalho une experiência, conhecimento, tecnologia e, acima de tudo,{' '}
              <span className="font-normal italic text-[#5B63D3]">humanidade</span>.
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl mx-auto pt-2">
              Quero que cada paciente se sinta cuidado, ouvido e seguro. Que tenha alguém ao seu lado para responder suas dúvidas, observar sua evolução, orientar sua rede de apoio e tornar os primeiros dias — que podem ser tão delicados — mais tranquilos.
            </p>

            <div className="pt-4 flex items-center justify-center gap-3 text-slate-400 font-serif italic text-sm">
              <span className="w-8 h-[1px] bg-slate-300" />
              <span className="text-[#5B63D3]">com cuidado, Gabriela</span>
              <span className="w-8 h-[1px] bg-slate-300" />
            </div>
          </div>

          {/*PARCERIA COM CIRURGIÕES */}
          <div className="bg-gradient-to-r from-[#5B63D3] via-[#4A63D8] to-[#3B82F6] rounded-[32px] p-8 sm:p-12 text-white shadow-xl shadow-indigo-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white/90 px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-white/20">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>EM PARCERIA COM CIRURGIÕES E EQUIPES MÉDICAS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-snug">
                  Um cuidado construído <span className="font-normal italic">em equipe</span>
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-white/85 leading-relaxed">
                  <p>
                    Também acredito na força de um cuidado construído em equipe. Por isso, busco estabelecer parcerias com cirurgiões plásticos e equipes médicas, mantendo uma comunicação próxima e respeitando as condutas e orientações do médico responsável.
                  </p>
                  <p>
                    Meu objetivo é somar experiência e conhecimento ao trabalho da equipe, proporcionando ao paciente uma assistência mais próxima, integrada e segura.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center text-center lg:text-right space-y-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/15">
                <p className="font-serif italic text-sm sm:text-base text-white/90 max-w-xs leading-relaxed">
                  "Somar cuidado, experiência e segurança à recuperação de cada paciente."
                </p>

                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#5B63D3] text-xs font-medium px-6 py-3.5 rounded-full shadow-md transition-all group"
                >
                  <span>Sou cirurgião e quero conhecer o trabalho</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO INFERIOR: DEPOIMENTOS */}
      <section id="depoimentos" className="w-full bg-[#EEF2F7] text-slate-700 font-sans py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* CABEÇALHO */}
          <div className="text-center space-y-3">
            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#5B63D3] uppercase block">
              DEPOIMENTOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight">
              Histórias de <span className="font-normal italic text-[#5B63D3]">cuidado</span> e recuperação
            </h2>
          </div>

          {/* DEPOIMENTOS DOS CLIENTES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow space-y-8"
              >
                <div className="space-y-4">
                  {/* Ícone de Aspas */}
                  <Quote className="w-8 h-8 text-[#5B63D3]/40 fill-[#5B63D3]/10" />
                  
                  {/* Texto do Depoimento */}
                  <p className="text-xs text-slate-500 italic leading-relaxed">
                    "{item.texto}"
                  </p>
                </div>

                {/* Utilizador*/}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-[#5B63D3] text-white flex items-center justify-center font-medium text-xs shrink-0">
                    {item.inicial}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-800">
                      {item.nome}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {item.data}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
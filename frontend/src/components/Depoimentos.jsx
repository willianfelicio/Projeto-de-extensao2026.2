import React from 'react';

export default function Depoimentos() {
  const depoimentos = [
    {
      texto: "Não sabia que existia um acompanhamento tão especializado para o pós-operatório. A Gabriela trouxe segurança, tranquilidade e cuidado humanizado. Indispensável para quem passa por uma cirurgia plástica.",
      nome: "Carla R.",
      data: "18/02/2026",
      inicial: "C"
    },
    {
      texto: "Profissional excepcional. O cuidado com as dores, a atenção às minhas dúvidas e o carinho foram toda a diferença nos meus primeiros dias em casa. Me senti segura o tempo todo!",
      nome: "Patricia L.",
      data: "10/01/2026",
      inicial: "P"
    },
    {
      texto: "A Gabriela foi um anjo na minha recuperação. Tive medo de ficar sozinha depois da cirurgia, mas ela esteve presente em cada momento, orientando, cuidando e me tranquilizando. Recuperei muito mais rápido do que imaginava.",
      nome: "Mariana S.",
      data: "05/11/2025",
      inicial: "M"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-2 block">
            DEPOIMENTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900">
            Histórias de <span className="italic font-normal text-purple-700">cuidado</span> e recuperação
          </h2>
        </div>

        {/* Grelha de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl font-serif text-purple-300 block mb-3">“</span>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 italic">
                  "{item.texto}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 font-bold text-xs flex items-center justify-center shrink-0">
                  {item.inicial}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-800">{item.nome}</h4>
                  <span className="text-[10px] text-slate-400">{item.data}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
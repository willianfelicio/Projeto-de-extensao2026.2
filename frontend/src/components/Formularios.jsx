import React, { useState } from 'react';

export default function Formularios() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    procedimento: '',
    dataPrevista: '',
    nivelDor: '0',
    observacoes: '',
    telefone: '',
    nomeCirurgiao: '',
    hospital: '',
    cidade: '',
    necessidades: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do agendamento enviados:', formData);
    alert('Solicitação enviada com sucesso! Entraremos em contacto em breve.');
  };

  return (
    <section id="agendamento" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Chamada para Ação */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest text-purple-600 uppercase mb-2">
            VAMOS CONVERSAR?
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">
            Pronta para cuidar de você em cada etapa da sua recuperação.
          </h2>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            Solicite seu atendimento e receba um cuidado individualizado, seguro e acolhedor.
          </p>
        </div>

        {/* Card do Formulário */}
        <div className="bg-slate-50/70 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm">
          
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-widest font-bold text-purple-600 block mb-1">
              SOLICITAR ATENDIMENTO
            </span>
            <h3 className="text-2xl font-serif text-slate-800">
              Vamos conversar sobre o seu <span className="italic text-purple-700">cuidado</span>?
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Preencha o formulário com suas informações. Entrarei em contato para entender suas necessidades e planejar seus cuidados.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Bloco 1: Informações Essenciais */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 pb-2 border-b border-slate-200">
                Informações Essenciais
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Nome completo *</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">CPF (apenas números) *</label>
                  <input
                    type="text"
                    name="cpf"
                    required
                    placeholder="00000000000"
                    value={formData.cpf}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Data de nascimento *</label>
                  <input
                    type="date"
                    name="dataNascimento"
                    required
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 transition-colors text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Procedimento realizado ou que vai realizar *</label>
                  <select
                    name="procedimento"
                    required
                    value={formData.procedimento}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 transition-colors text-slate-600"
                  >
                    <option value="">Selecione...</option>
                    <option value="Mamoplastia">Mamoplastia / Abdominoplastia</option>
                    <option value="Lipoaspiração">Lipoaspiração / Lipo HD</option>
                    <option value="Facial">Cirurgia Facial / Ritmoplastia</option>
                    <option value="Outro">Outros cuidados pós-operatórios</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Data prevista da cirurgia *</label>
                  <input
                    type="date"
                    name="dataPrevista"
                    required
                    value={formData.dataPrevista}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 transition-colors text-slate-600"
                  />
                </div>
              </div>

              <div className="mt-4 text-xs">
                <label className="block text-slate-700 font-medium mb-1">
                  Nível de dor (0 = sem dor, 10 = dor intensa)
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  name="nivelDor"
                  value={formData.nivelDor}
                  onChange={handleChange}
                  className="w-full accent-purple-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>0 (Sem dor)</span>
                  <span className="font-bold text-purple-700">Nível atual: {formData.nivelDor}</span>
                  <span>10 (Dor intensa)</span>
                </div>
              </div>

              <div className="mt-4 text-xs">
                <label className="block text-slate-700 font-medium mb-1">Observações / Dúvidas</label>
                <textarea
                  name="observacoes"
                  rows="3"
                  placeholder="Detalhes adicionais sobre a cirurgia ou pós-operatório..."
                  value={formData.observacoes}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl p-3 outline-none focus:border-purple-500 transition-colors"
                ></textarea>
              </div>
            </div>

            {/* Bloco 2: Informações Complementares */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-4 pb-2 border-b border-slate-200">
                Informações Complementares (Opcional)
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-700 font-medium mb-1">Telefone / WhatsApp</label>
                  <input
                    type="text"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Nome do cirurgião</label>
                  <input
                    type="text"
                    name="nomeCirurgiao"
                    placeholder="Dr(a). Nome"
                    value={formData.nomeCirurgiao}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Hospital / Clínica</label>
                  <input
                    type="text"
                    name="hospital"
                    placeholder="Onde será realizada"
                    value={formData.hospital}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1">Cidade</label>
                  <input
                    type="text"
                    name="cidade"
                    placeholder="Sua cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div className="mt-4 text-xs">
                <label className="block text-slate-700 font-medium mb-1">Necessidades específicas</label>
                <input
                  type="text"
                  name="necessidades"
                  placeholder="Alguma necessidade especial de cuidado, horário, mobilidade..."
                  value={formData.necessidades}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            {/* Termos e Submissão */}
            <div className="pt-2 text-center">
              <label className="inline-flex items-center gap-2 text-[11px] text-slate-500 mb-6 cursor-pointer">
                <input type="checkbox" required className="rounded accent-purple-600" />
                <span>Autorizo o envio e tratamento dos meus dados para fins de contacto e avaliação de cuidados.</span>
              </label>

              <button
                type="submit"
                className="w-full md:w-auto bg-purple-700 hover:bg-purple-800 text-white font-semibold text-xs px-10 py-3.5 rounded-full shadow-lg shadow-purple-200 transition-all cursor-pointer"
              >
                Enviar solicitação
              </button>

              <p className="text-[10px] text-slate-400 mt-3 flex items-center justify-center gap-1">
                <span>🔒</span> Seus dados estão seguros e serão tratados com total sigilo e segurança.
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
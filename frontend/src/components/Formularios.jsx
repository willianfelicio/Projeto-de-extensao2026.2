import React, { useState } from 'react';

export default function Formularios() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    dataNascimento: '',
    procedimento: '',
    dataPrevista: '',
    nivelDor: '0',
    observacoes: '',
    telefone: '',
    nomeCirurgiao: '',
    hospital: '',
    cidade: '',
    necessidades: '',
    autorizo: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.nome.trim()) newErrors.nome = 'O Nome é obrigatório.';
    if (!formData.cpf.trim()) newErrors.cpf = 'O CPF é obrigatório.';
    if (!formData.email.trim()) newErrors.email = 'O E-mail é obrigatório.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert('Formulário enviado com sucesso!');
  };

  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
            SOLICITAR ATENDIMENTO
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-slate-800 mt-4">
            Vamos conversar sobre o seu <span className="font-serif italic text-purple-700">cuidado</span>?
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            Preencha o formulário com suas informações. Entrarei em contato para entender suas necessidades e planejar seus cuidados.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-8">
          
          {/* INFORMAÇÕES ESSENCIAIS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-4 pb-2 border-b border-slate-100">
              INFORMAÇÕES ESSENCIAIS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nome Completo */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Nome completo <span className="text-purple-600">*</span>
                </label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                />
                {errors.nome && <p className="text-[10px] text-red-500 mt-1">{errors.nome}</p>}
              </div>

              {/* CPF */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  CPF (Apenas números) <span className="text-purple-600">*</span>
                </label>
                <input
                  type="text"
                  name="cpf"
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                />
                {errors.cpf && <p className="text-[10px] text-red-500 mt-1">{errors.cpf}</p>}
              </div>

              {/* E-mail */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  E-mail <span className="text-purple-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                />
                {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Data de Nascimento */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Data de nascimento <span className="text-purple-600">*</span>
                </label>
                <input
                  type="date"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 text-slate-600"
                />
              </div>

              {/* Procedimento */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Procedimento realizado ou que vai realizar <span className="text-purple-600">*</span>
                </label>
                <select
                  name="procedimento"
                  value={formData.procedimento}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 text-slate-600 bg-white"
                >
                  <option value="">Selecione...</option>
                  <option value="mamoplastia">Mamoplastia</option>
                  <option value="abdominoplastia">Abdominoplastia</option>
                  <option value="lipoaspiração">Lipoaspiração</option>
                  <option value="ritidoplastia">Ritidoplastia (Facelift)</option>
                  <option value="outro">Outro procedimento</option>
                </select>
              </div>

              {/* Data Prevista */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Data prevista da cirurgia <span className="text-purple-600">*</span>
                </label>
                <input
                  type="date"
                  name="dataPrevista"
                  value={formData.dataPrevista}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600 text-slate-600"
                />
              </div>
            </div>

            {/* Nível de dor */}
            <div className="mt-4">
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Nível de dor (0 = sem dor, 10 = dor intensa)
              </label>
              <input
                type="range"
                min="0"
                max="10"
                name="nivelDor"
                value={formData.nivelDor}
                onChange={handleChange}
                className="w-full accent-purple-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>0 (Sem dor)</span>
                <span className="font-bold text-purple-700">{formData.nivelDor}</span>
                <span>10 (Dor intensa)</span>
              </div>
            </div>

            {/* Observações */}
            <div className="mt-4">
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Observações / Dúvidas
              </label>
              <textarea
                name="observacoes"
                rows="3"
                placeholder="Conte sobre seu momento, dúvidas e necessidades..."
                value={formData.observacoes}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
              />
            </div>
          </div>

          {/* INFORMAÇÕES COMPLEMENTARES */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-4 pb-2 border-b border-slate-100">
              INFORMAÇÕES COMPLEMENTARES (OPCIONAL)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Telefone / WhatsApp</label>
                <input
                  type="text"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Nome do cirurgião</label>
                <input
                  type="text"
                  name="nomeCirurgiao"
                  placeholder="Dr(a). Nome"
                  value={formData.nomeCirurgiao}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Hospital / Clínica</label>
                <input
                  type="text"
                  name="hospital"
                  placeholder="Onde será ou foi feita"
                  value={formData.hospital}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Cidade</label>
                <input
                  type="text"
                  name="cidade"
                  placeholder="Sua cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-xs font-medium text-slate-700 mb-1">Necessidades específicas</label>
              <input
                type="text"
                name="necessidades"
                placeholder="Alguma necessidade especial de cuidado, horário, mobilidade..."
                value={formData.necessidades}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-600"
              />
            </div>
          </div>

          {/* Aceite LGPD */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              name="autorizo"
              id="autorizo"
              checked={formData.autorizo}
              onChange={handleChange}
              className="mt-0.5 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="autorizo" className="text-[11px] text-slate-500 leading-tight">
              Autorizo o envio e o tratamento dos meus dados pelo meio do fim de contato e avaliação de prestação de atendimentos, conforme a Política de Privacidade.
            </label>
          </div>

          {/* Botão Enviar */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3.5 bg-purple-700 text-white font-semibold text-xs rounded-xl hover:bg-purple-800 transition-colors shadow-md shadow-purple-200"
            >
              Enviar solicitação
            </button>
            <p className="text-[10px] text-slate-400 mt-2 flex items-center justify-center gap-1">
              <span>🔒</span> Seus dados estão seguros com total sigilo e segurança.
            </p>
          </div>

        </form>

      </div>
    </section>
  );
}
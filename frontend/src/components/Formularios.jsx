import { useState } from 'react';

export default function Formularios() {
  {/* Estado inicial do formulário */ }
  const initialFormState = {
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
    autorizo: false,
  };

  {/* Estados para gerenciar os dados do formulário, erros, carregamento e mensagens (sucesso/erro) */ }
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagemSucesso('');
    setMensagemErro('');

    // Validações básicas de campos obrigatórios
    const newErrors = {};
    if (!formData.nome.trim()) newErrors.nome = 'O Nome completo é obrigatório.';
    if (!formData.cpf.trim()) newErrors.cpf = 'O CPF é obrigatório.';
    if (!formData.email.trim()) newErrors.email = 'O E-mail é obrigatório.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      // URL do backend Spring Boot hospedado no Render
      const response = await fetch('https://projeto-de-extensao2026-2.onrender.com/atendimentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok || response.status === 201) {
        setMensagemSucesso('Solicitação enviada e registrada no banco de dados com sucesso!');
        setFormData(initialFormState); // Limpa o formulário após o envio
      } else {
        setMensagemErro(`Erro ao registrar: código HTTP ${response.status}`);
      }
    } catch (error) {
      console.error('Erro de conexão com o servidor:', error);
      setMensagemErro('Não foi possível conectar ao servidor. Verifique se o backend Spring Boot está rodando.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="w-full bg-[#FDFBFD] font-sans py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Cabeçalho do Formulário */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-4 text-[10px] font-semibold tracking-[0.25em] text-[#5B63D3] uppercase">
            <span className="w-8 h-[1px] bg-[#5B63D3]/40" />
            <span>SOLICITAR ATENDIMENTO</span>
            <span className="w-8 h-[1px] bg-[#5B63D3]/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900">
            Vamos conversar sobre o <span className="font-normal italic text-[#5B63D3]">seu cuidado</span>?
          </h2>
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            Preencha os dados abaixo para que possamos entender suas necessidades e planejar um atendimento exclusivo.
          </p>
        </div>

        {/* Notificações de Sucesso ou Erro */}
        {mensagemSucesso && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl text-center">
            {mensagemSucesso}
          </div>
        )}

        {mensagemErro && (
          <div className="p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl text-center">
            {mensagemErro}
          </div>
        )}

        {/* Formulário Principal */}
        <form onSubmit={handleSubmit} className="bg-white rounded-[28px] p-8 md:p-10 border border-slate-100 shadow-sm space-y-8">
          
          {/* INFORMAÇÕES ESSENCIAIS */}
          <div className="space-y-6">
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase border-b border-slate-100 pb-2">
              Informações Essenciais
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">Nome completo *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Ex: Maria Silva"
                  className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B63D3] transition-colors"
                />
                {errors.nome && <span className="text-[11px] text-rose-500">{errors.nome}</span>}
              </div>

              {/* CPF */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">CPF (apenas números) *</label>
                <input
                  type="text"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="000.000.000-00"
                  className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B63D3] transition-colors"
                />
                {errors.cpf && <span className="text-[11px] text-rose-500">{errors.cpf}</span>}
              </div>

              {/* E-mail */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B63D3] transition-colors"
                />
                {errors.email && <span className="text-[11px] text-rose-500">{errors.email}</span>}
              </div>

              {/* Data de Nascimento */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">Data de nascimento</label>
                <input
                  type="date"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 text-slate-600 focus:outline-none focus:border-[#5B63D3] transition-colors"
                />
              </div>

              {/* Procedimento */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">Procedimento realizado ou a realizar</label>
                <input
                  type="text"
                  name="procedimento"
                  value={formData.procedimento}
                  onChange={handleChange}
                  placeholder="Ex: Abdominoplastia, Mamoplastia..."
                  className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B63D3] transition-colors"
                />
              </div>

              {/* Data Prevista */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">Data prevista da cirurgia</label>
                <input
                  type="date"
                  name="dataPrevista"
                  value={formData.dataPrevista}
                  onChange={handleChange}
                  className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 text-slate-600 focus:outline-none focus:border-[#5B63D3] transition-colors"
                />
              </div>
            </div>

            {/* Nível de Dor */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-slate-700">Nível de dor (0 a 10 - sem dor a dor intensa)</label>
                <span className="text-xs font-semibold text-[#5B63D3]">{formData.nivelDor}</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                name="nivelDor"
                value={formData.nivelDor}
                onChange={handleChange}
                className="w-full accent-[#5B63D3] cursor-pointer"
              />
            </div>

            {/* Observações / Dúvidas */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-700">Observações / Dúvidas</label>
              <textarea
                name="observacoes"
                rows="3"
                value={formData.observacoes}
                onChange={handleChange}
                placeholder="Descreva aqui qualquer detalhe ou dúvida que deseja compartilhar..."
                className="w-full text-xs p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B63D3] transition-colors resize-none"
              />
            </div>
          </div>

          {/* INFORMAÇÕES COMPLEMENTARES */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xs font-semibold tracking-wider text-slate-400 uppercase border-b border-slate-100 pb-2">
              Informações Complementares (Opcional)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Telefone / WhatsApp */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">Telefone / WhatsApp</label>
                <input
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B63D3] transition-colors"
                />
              </div>

              {/* Nome do Cirurgião */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">Nome do cirurgião</label>
                <input
                  type="text"
                  name="nomeCirurgiao"
                  value={formData.nomeCirurgiao}
                  onChange={handleChange}
                  placeholder="Ex: Dr. Fulano de Tal"
                  className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B63D3] transition-colors"
                />
              </div>

              {/* Hospital / Clínica */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">Hospital / Clínica</label>
                <input
                  type="text"
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleChange}
                  placeholder="Ex: Hospital Albert Einstein"
                  className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B63D3] transition-colors"
                />
              </div>

              {/* Cidade */}
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-700">Cidade</label>
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  placeholder="Ex: São Paulo"
                  className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B63D3] transition-colors"
                />
              </div>
            </div>

            {/* Necessidades Específicas */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-700">Necessidades específicas</label>
              <textarea
                name="necessidades"
                rows="2"
                value={formData.necessidades}
                onChange={handleChange}
                placeholder="Alguma necessidade específica de mobilidade, medicação ou acompanhamento especial?"
                className="w-full text-xs p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#5B63D3] transition-colors resize-none"
              />
            </div>
          </div>

          {/* CHECKBOX DE AUTORIZAÇÃO */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="autorizo"
              name="autorizo"
              checked={formData.autorizo}
              onChange={handleChange}
              className="mt-0.5 rounded border-slate-300 text-[#5B63D3] focus:ring-[#5B63D3]"
            />
            <label htmlFor="autorizo" className="text-[11px] text-slate-500 leading-relaxed cursor-pointer">
              Autorizo o envio e o tratamento dos meus dados pessoais para fins de contato e avaliação de atendimento, em conformidade com a LGPD.
            </label>
          </div>

          {/* BOTÃO DE ENVIO */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-10 py-3.5 bg-[#5B63D3] text-white font-medium text-xs rounded-full shadow-md hover:bg-[#464cc4] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando...' : 'Enviar solicitação'}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
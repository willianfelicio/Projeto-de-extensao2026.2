import { useState } from 'react';
import { api } from '../services/api';

export function Formularios() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    dataNascimento: '',
    procedimentoId: '',
    dataCirurgia: '',
    observacoes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/atendimentos', formData);
      alert('Solicitação enviada com sucesso!');
      setFormData({
        nome: '',
        email: '',
        dataNascimento: '',
        procedimentoId: '',
        dataCirurgia: '',
        observacoes: ''
      });
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
      alert('Ocorreu um erro ao enviar. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <input
        type="text"
        name="nome"
        placeholder="Nome completo"
        value={formData.nome}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="seu@email.com"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-lg">
        Enviar solicitação
      </button>
    </form>
  );
}
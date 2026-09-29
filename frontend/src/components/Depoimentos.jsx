import { useEffect, useState } from 'react';
import { api } from '../services/api';

export function Depoimentos() {
  const [depoimentos, setDepoimentos] = useState([]);

  useEffect(() => {
    // Busca os depoimentos salvos no banco de dados
    api.get('/depoimentos')
      .then(response => setDepoimentos(response.data))
      .catch(error => console.error('Erro ao buscar depoimentos:', error));
  }, []);

  return (
    <section id="depoimentos" className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">
        Histórias de cuidado e recuperação
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {depoimentos.map((dep) => (
          <div key={dep.id} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="italic text-gray-600 mb-4">"{dep.texto}"</p>
            <p className="font-semibold text-purple-900">{dep.nomePaciente}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
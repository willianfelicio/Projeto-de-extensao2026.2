import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Altere para a sua URL do Render quando for testar o deploy em produção
// Exemplo: 'https://seu-app-no-render.onrender.com'
const API_BASE_URL = 'https://projeto-de-extensao2026-2.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState('procedimentos');
  const [mensagem, setMensagem] = useState({ tipo: '', texto: '' });

  // Listas de dados da API
  const [procedimentos, setProcedimentos] = useState([]);
  const [depoimentos, setDepoimentos] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [atendimentos, setAtendimentos] = useState([]);

  // Form states baseados nos DTOs exatos do Java
  const [formPaciente, setFormPaciente] = useState({
    nome: '',
    cpf: '',
    email: '',
    telefone: ''
  });

  const [formProcedimento, setFormProcedimento] = useState({
    nome: '',
    descricao: '',
    valor: '',
    duracaoMinutos: ''
  });

  const [formDepoimento, setFormDepoimento] = useState({
    texto: '',
    nota: 5,
    pacienteId: ''
  });

  const [formAtendimento, setFormAtendimento] = useState({
    dataHora: '',
    observacoes: '',
    status: 'AGENDADO',
    pacienteId: '',
    procedimentoId: ''
  });

  // Carrega os dados sempre que muda de aba ou após um cadastro
  useEffect(() => {
    carregarDados();
  }, [abaAtiva]);

  const carregarDados = async () => {
    setMensagem({ tipo: '', texto: '' });
    try {
      if (abaAtiva === 'procedimentos') {
        const res = await api.get('/procedimentos');
        setProcedimentos(res.data);
      } else if (abaAtiva === 'depoimentos') {
        const [resDep, resPac] = await Promise.all([
          api.get('/depoimentos'),
          api.get('/pacientes')
        ]);
        setDepoimentos(resDep.data);
        setPacientes(resPac.data);
      } else if (abaAtiva === 'pacientes') {
        const res = await api.get('/pacientes');
        setPacientes(res.data);
      } else if (abaAtiva === 'atendimentos') {
        const [resAtend, resPac, resProc] = await Promise.all([
          api.get('/atendimentos'),
          api.get('/pacientes'),
          api.get('/procedimentos')
        ]);
        setAtendimentos(resAtend.data);
        setPacientes(resPac.data);
        setProcedimentos(resProc.data);
      }
    } catch (err) {
      setMensagem({
        tipo: 'erro',
        texto: `Erro ao conectar com a API (${err.message}). Verifique a URL configurada.`
      });
    }
  };

  // Funções de envio de dados (POST)
  const handleCadastrarPaciente = async (e) => {
    e.preventDefault();
    try {
      await api.post('/pacientes', formPaciente);
      setMensagem({ tipo: 'sucesso', texto: 'Paciente cadastrado com sucesso!' });
      setFormPaciente({ nome: '', cpf: '', email: '', telefone: '' });
      carregarDados();
    } catch (err) {
      setMensagem({ tipo: 'erro', texto: `Erro no cadastro: ${err.response?.data?.message || err.message}` });
    }
  };

  const handleCadastrarProcedimento = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formProcedimento,
        valor: parseFloat(formProcedimento.valor),
        duracaoMinutos: formProcedimento.duracaoMinutos ? parseInt(formProcedimento.duracaoMinutos) : null
      };
      await api.post('/procedimentos', payload);
      setMensagem({ tipo: 'sucesso', texto: 'Procedimento cadastrado com sucesso!' });
      setFormProcedimento({ nome: '', descricao: '', valor: '', duracaoMinutos: '' });
      carregarDados();
    } catch (err) {
      setMensagem({ tipo: 'erro', texto: `Erro no cadastro: ${err.response?.data?.message || err.message}` });
    }
  };

  const handleCadastrarDepoimento = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        texto: formDepoimento.texto,
        nota: parseInt(formDepoimento.nota),
        pacienteId: parseInt(formDepoimento.pacienteId)
      };
      await api.post('/depoimentos', payload);
      setMensagem({ tipo: 'sucesso', texto: 'Depoimento enviado com sucesso!' });
      setFormDepoimento({ texto: '', nota: 5, pacienteId: '' });
      carregarDados();
    } catch (err) {
      setMensagem({ tipo: 'erro', texto: `Erro ao enviar depoimento: ${err.response?.data?.message || err.message}` });
    }
  };

  const handleCadastrarAtendimento = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        dataHora: formAtendimento.dataHora, // Requer formato ISO YYYY-MM-DDTHH:mm
        observacoes: formAtendimento.observacoes,
        status: formAtendimento.status,
        pacienteId: parseInt(formAtendimento.pacienteId),
        procedimentoId: parseInt(formAtendimento.procedimentoId)
      };
      await api.post('/atendimentos', payload);
      setMensagem({ tipo: 'sucesso', texto: 'Atendimento agendado com sucesso!' });
      setFormAtendimento({ dataHora: '', observacoes: '', status: 'AGENDADO', pacienteId: '', procedimentoId: '' });
      carregarDados();
    } catch (err) {
      setMensagem({ tipo: 'erro', texto: `Erro ao agendar atendimento: ${err.response?.data?.message || err.message}` });
    }
  };

  // Funções de Exclusão (DELETE)
  const handleDeletar = async (endpoint, id) => {
    if (!window.confirm('Tem certeza que deseja deletar este registro?')) return;
    try {
      await api.delete(`/${endpoint}/${id}`);
      setMensagem({ tipo: 'sucesso', texto: 'Registro removido com sucesso!' });
      carregarDados();
    } catch (err) {
      setMensagem({ tipo: 'erro', texto: `Erro ao deletar: ${err.message}` });
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>Painel de Gerenciamento - Pós-Operatório</h2>

      {/* Navegação entre Controllers */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {['procedimentos', 'pacientes', 'depoimentos', 'atendimentos'].map((aba) => (
          <button
            key={aba}
            onClick={() => setAbaAtiva(aba)}
            style={{
              padding: '10px 18px',
              cursor: 'pointer',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: abaAtiva === aba ? '#6f42c1' : '#e9ecef',
              color: abaAtiva === aba ? '#fff' : '#495057',
              fontWeight: 'bold',
              textTransform: 'capitalize'
            }}
          >
            {aba}
          </button>
        ))}
      </div>

      {/* Alerta de Mensagem */}
      {mensagem.texto && (
        <div style={{
          padding: '12px 15px',
          borderRadius: '6px',
          marginBottom: '20px',
          backgroundColor: mensagem.tipo === 'sucesso' ? '#d4edda' : '#f8d7da',
          color: mensagem.tipo === 'sucesso' ? '#155724' : '#721c24',
          border: `1px solid ${mensagem.tipo === 'sucesso' ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          {mensagem.texto}
        </div>
      )}

      {/* ABA PROCEDIMENTOS */}
      {abaAtiva === 'procedimentos' && (
        <section>
          <h3>Procedimentos (`/procedimentos`)</h3>
          <form onSubmit={handleCadastrarProcedimento} style={formStyle}>
            <h4>Cadastrar Procedimento</h4>
            <input
              type="text"
              placeholder="Nome do Procedimento *"
              value={formProcedimento.nome}
              onChange={(e) => setFormProcedimento({ ...formProcedimento, nome: e.target.value })}
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={formProcedimento.descricao}
              onChange={(e) => setFormProcedimento({ ...formProcedimento, descricao: e.target.value })}
              style={inputStyle}
            />
            <input
              type="number"
              step="0.01"
              placeholder="Valor (R$) *"
              value={formProcedimento.valor}
              onChange={(e) => setFormProcedimento({ ...formProcedimento, valor: e.target.value })}
              required
              style={inputStyle}
            />
            <input
              type="number"
              placeholder="Duração (minutos)"
              value={formProcedimento.duracaoMinutos}
              onChange={(e) => setFormProcedimento({ ...formProcedimento, duracaoMinutos: e.target.value })}
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Salvar Procedimento</button>
          </form>

          <h4>Procedimentos Cadastrados:</h4>
          <div style={cardsContainer}>
            {procedimentos.map((proc) => (
              <div key={proc.id} style={cardStyle}>
                <div>
                  <strong>{proc.nome}</strong> - R$ {proc.valor?.toFixed(2)}
                  <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>{proc.descricao}</p>
                  {proc.duracaoMinutos && <small>Duração: {proc.duracaoMinutos} min</small>}
                </div>
                <button onClick={() => handleDeletar('procedimentos', proc.id)} style={deleteButtonStyle}>Excluir</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ABA PACIENTES */}
      {abaAtiva === 'pacientes' && (
        <section>
          <h3>Pacientes (`/pacientes`)</h3>
          <form onSubmit={handleCadastrarPaciente} style={formStyle}>
            <h4>Cadastrar Paciente</h4>
            <input
              type="text"
              placeholder="Nome Completo *"
              value={formPaciente.nome}
              onChange={(e) => setFormPaciente({ ...formPaciente, nome: e.target.value })}
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="CPF (somente 11 números) *"
              maxLength="11"
              value={formPaciente.cpf}
              onChange={(e) => setFormPaciente({ ...formPaciente, cpf: e.target.value })}
              required
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="E-mail *"
              value={formPaciente.email}
              onChange={(e) => setFormPaciente({ ...formPaciente, email: e.target.value })}
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Telefone"
              value={formPaciente.telefone}
              onChange={(e) => setFormPaciente({ ...formPaciente, telefone: e.target.value })}
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Salvar Paciente</button>
          </form>

          <h4>Pacientes Cadastrados:</h4>
          <div style={cardsContainer}>
            {pacientes.map((pac) => (
              <div key={pac.id} style={cardStyle}>
                <div>
                  <strong>{pac.nome}</strong> (CPF: {pac.cpf})
                  <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>{pac.email} | {pac.telefone || 'Sem telefone'}</p>
                </div>
                <button onClick={() => handleDeletar('pacientes', pac.id)} style={deleteButtonStyle}>Excluir</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ABA DEPOIMENTOS */}
      {abaAtiva === 'depoimentos' && (
        <section>
          <h3>Depoimentos (`/depoimentos`)</h3>
          <form onSubmit={handleCadastrarDepoimento} style={formStyle}>
            <h4>Novo Depoimento</h4>
            <select
              value={formDepoimento.pacienteId}
              onChange={(e) => setFormDepoimento({ ...formDepoimento, pacienteId: e.target.value })}
              required
              style={inputStyle}
            >
              <option value="">Selecione o Paciente *</option>
              {pacientes.map((p) => (
                <option key={p.id} value={p.id}>{p.nome}</option>
              ))}
            </select>
            <textarea
              placeholder="Texto do Depoimento *"
              value={formDepoimento.texto}
              onChange={(e) => setFormDepoimento({ ...formDepoimento, texto: e.target.value })}
              required
              style={{ ...inputStyle, minHeight: '70px' }}
            />
            <input
              type="number"
              min="1"
              max="5"
              placeholder="Nota (1 a 5) *"
              value={formDepoimento.nota}
              onChange={(e) => setFormDepoimento({ ...formDepoimento, nota: e.target.value })}
              required
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Enviar Depoimento</button>
          </form>

          <h4>Depoimentos Recebidos:</h4>
          <div style={cardsContainer}>
            {depoimentos.map((dep) => (
              <div key={dep.id} style={cardStyle}>
                <div>
                  <strong>Paciente: {dep.paciente?.nome || `ID ${dep.pacienteId}`}</strong> - Nota: {dep.nota}/5
                  <p style={{ margin: '5px 0', fontStyle: 'italic', color: '#444' }}>"{dep.texto}"</p>
                  <small style={{ color: '#888' }}>Data: {dep.data}</small>
                </div>
                <button onClick={() => handleDeletar('depoimentos', dep.id)} style={deleteButtonStyle}>Excluir</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ABA ATENDIMENTOS */}
      {abaAtiva === 'atendimentos' && (
        <section>
          <h3>Atendimentos (`/atendimentos`)</h3>
          <form onSubmit={handleCadastrarAtendimento} style={formStyle}>
            <h4>Agendar Atendimento</h4>
            <select
              value={formAtendimento.pacienteId}
              onChange={(e) => setFormAtendimento({ ...formAtendimento, pacienteId: e.target.value })}
              required
              style={inputStyle}
            >
              <option value="">Selecione o Paciente *</option>
              {pacientes.map((p) => (
                <option key={p.id} value={p.id}>{p.nome}</option>
              ))}
            </select>
            <select
              value={formAtendimento.procedimentoId}
              onChange={(e) => setFormAtendimento({ ...formAtendimento, procedimentoId: e.target.value })}
              required
              style={inputStyle}
            >
              <option value="">Selecione o Procedimento *</option>
              {procedimentos.map((p) => (
                <option key={p.id} value={p.id}>{p.nome}</option>
              ))}
            </select>
            <input
              type="datetime-local"
              value={formAtendimento.dataHora}
              onChange={(e) => setFormAtendimento({ ...formAtendimento, dataHora: e.target.value })}
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Observações"
              value={formAtendimento.observacoes}
              onChange={(e) => setFormAtendimento({ ...formAtendimento, observacoes: e.target.value })}
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Agendar Atendimento</button>
          </form>

          <h4>Atendimentos Agendados:</h4>
          <div style={cardsContainer}>
            {atendimentos.map((atend) => (
              <div key={atend.id} style={cardStyle}>
                <div>
                  <strong>Paciente: {atend.paciente?.nome}</strong> | <strong>Procedimento: {atend.procedimento?.nome}</strong>
                  <p style={{ margin: '5px 0', fontSize: '14px' }}>Data/Hora: {new Date(atend.dataHora).toLocaleString('pt-BR')}</p>
                  <span style={{ fontSize: '12px', padding: '3px 8px', borderRadius: '4px', backgroundColor: '#e2e3e5' }}>
                    Status: {atend.status}
                  </span>
                </div>
                <button onClick={() => handleDeletar('atendimentos', atend.id)} style={deleteButtonStyle}>Excluir</button>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// Estilização leve em JS
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '25px',
  padding: '18px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  backgroundColor: '#f8f9fa'
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ced4da',
  fontSize: '14px'
};

const buttonStyle = {
  padding: '11px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const cardsContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
};

const cardStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  backgroundColor: '#ffffff'
};

const deleteButtonStyle = {
  padding: '6px 12px',
  backgroundColor: '#dc3545',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '13px'
};
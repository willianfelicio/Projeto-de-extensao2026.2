package com.posoperatorio.api.service;

import com.posoperatorio.api.dto.AtendimentoDTO;
import com.posoperatorio.api.model.Atendimento;
import com.posoperatorio.api.repository.AtendimentoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AtendimentoService {

    private final AtendimentoRepository atendimentoRepository;

    public AtendimentoService(AtendimentoRepository atendimentoRepository) {
        this.atendimentoRepository = atendimentoRepository;
    }

    public List<Atendimento> listarTodos() {
        return atendimentoRepository.findAll();
    }

    public Optional<Atendimento> buscarPorId(Long id) {
        return atendimentoRepository.findById(id);
    }

    public Atendimento salvar(AtendimentoDTO dto) {
        Atendimento atendimento = new Atendimento();
        
        // Mapeando os dados recebidos do formulário React
        atendimento.setNome(dto.nome());
        atendimento.setCpf(dto.cpf());
        atendimento.setEmail(dto.email());
        atendimento.setDataNascimento(dto.dataNascimento());
        atendimento.setProcedimento(dto.procedimento());
        atendimento.setDataPrevista(dto.dataPrevista());
        atendimento.setNivelDor(dto.nivelDor());
        atendimento.setObservacoes(dto.observacoes());
        atendimento.setTelefone(dto.telefone());
        atendimento.setNomeCirurgiao(dto.nomeCirurgiao());
        atendimento.setHospital(dto.hospital());
        atendimento.setCidade(dto.cidade());
        atendimento.setNecessidades(dto.necessidades());
        atendimento.setAutorizo(dto.autorizo());

        return atendimentoRepository.save(atendimento);
    }

    public void deletar(Long id) {
        atendimentoRepository.deleteById(id);
    }
}
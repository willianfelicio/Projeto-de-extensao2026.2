package com.posoperatorio.api.service;

import com.posoperatorio.api.dto.ProcedimentoDTO;
import com.posoperatorio.api.model.Procedimento;
import com.posoperatorio.api.repository.ProcedimentoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProcedimentoService {

    private final ProcedimentoRepository procedimentoRepository;

    public ProcedimentoService(ProcedimentoRepository procedimentoRepository) {
        this.procedimentoRepository = procedimentoRepository;
    }

    // Retorna a lista completa com todos os procedimentos cadastrados no banco de dados.
    public List<Procedimento> listarTodos() { // Corrigido para letra minúscula
        return procedimentoRepository.findAll();
    }

    // Busca um procedimento pelo ID no banco de dados.
    public Optional<Procedimento> buscarPorId(Long id) {
        return procedimentoRepository.findById(id);
    }

    // Cadastra um novo procedimento no sistema.
    public Procedimento salvar(ProcedimentoDTO dto) {
        Procedimento procedimento = new Procedimento();
        procedimento.setNome(dto.nome());
        procedimento.setDescricao(dto.descricao());
        procedimento.setValor(dto.valor());
        procedimento.setDuracaoMinutos(dto.duracaoMinutos());

        return procedimentoRepository.save(procedimento);
    }

    // Deleta um procedimento pelo ID.
    public void deletar(Long id) {
        procedimentoRepository.deleteById(id);
    }
}
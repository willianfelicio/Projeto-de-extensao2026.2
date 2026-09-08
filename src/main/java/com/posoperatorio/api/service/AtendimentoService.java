package com.posoperatorio.api.service;

import com.posoperatorio.api.dto.AtendimentoDTO;
import com.posoperatorio.api.model.Atendimento;
import com.posoperatorio.api.model.Paciente;
import com.posoperatorio.api.model.Procedimento;
import com.posoperatorio.api.repository.AtendimentoRepository;
import com.posoperatorio.api.repository.PacienteRepository;
import com.posoperatorio.api.repository.ProcedimentoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AtendimentoService {

    private final AtendimentoRepository atendimentoRepository;
    private final PacienteRepository pacienteRepository;
    private final ProcedimentoRepository procedimentoRepository;

    //Inclusão de Repositórios necessarios para associar paciente e procedimento

    public AtendimentoService(AtendimentoRepository atendimentoRepository,
                              PacienteRepository pacienteRepository,
                              ProcedimentoRepository procedimentoRepository){
        this.atendimentoRepository = atendimentoRepository;
        this.pacienteRepository = pacienteRepository;
        this.procedimentoRepository = procedimentoRepository;
    }
    public List<Atendimento> listarTodos(){
        return atendimentoRepository.findAll();
    }
    public Optional<Atendimento> buscarPorId(long id){
        return atendimentoRepository.findById(id);
    }

    public Atendimento salvar(AtendimentoDTO dto) {
        Paciente paciente = pacienteRepository.findById(dto.pacienteId())
                .orElseThrow(() -> new RuntimeExeption("Paciente não encontrado com ID: " + dto.pacienteId()));

        Procedimento salvar (ProcedimentoDTO dto)
        Procedimento procedimento = procedimentoRepository.findById(dto.procedimentoId())
                .orElseThrow(() -> new RuntimeExeption("Procedimento não encontrado com ID: " + dto.procedimentoId()));

        Atendimento atendimento = new Atendimento();
        atendimento.setDataHora(dto.dataHora());
        atendimento.setObrservacoes(dto.observacoes());
        atendimento.setStatus(dto.status() != null ? dto.status() : "AGENDADO");
        atendimento.setPaciente(paciente);
        atendimento.setProcedimento(procedimento);

        return atendimentoRepository.save(atendimento);
        }

        public void deletar(Long id){
        atendimentoRepository.deleteById(id);
    }
}

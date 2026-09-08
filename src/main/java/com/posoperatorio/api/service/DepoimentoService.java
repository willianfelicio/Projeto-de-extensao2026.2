package com.posoperatorio.api.service;

import com.posoperatorio.api.dto.DepoimentoDTO;
import com.posoperatorio.api.model.Depoimento;
import com.posoperatorio.api.model.Paciente;
import com.posoperatorio.api.repository.DepoimentoRepository;
import com.posoperatorio.api.repository.PacienteRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class DepoimentoService {

    private final DepoimentoRepository depoimentoRepository;
    private final PacienteRepository pacienteRepository;

    public DepoimentoService(DepoimentoRepository depoimentoRepository, PacienteRepository pacienteRepository) {
        this.depoimentoRepository = depoimentoRepository;
        this.pacienteRepository = pacienteRepository;
    }

    public List<Depoimento> listarTodos() {
        return depoimentoRepository.findAll();
    }

    public Optional<Depoimento> buscarPorId(Long id) {
        return depoimentoRepository.findById(id);
    }

    public Depoimento salvar(DepoimentoDTO dto) {
        // Valida se o paciente associado existe no banco
        Paciente paciente = pacienteRepository.findById(dto.pacienteId())
                .orElseThrow(() -> new RuntimeException("Paciente não encontrado com ID: " + dto.pacienteId()));

        Depoimento depoimento = new Depoimento();
        depoimento.setTexto(dto.texto());
        depoimento.setNota(dto.nota());
        // Se a data não for informada no DTO, atribui a data atual do sistema
        depoimento.setData(dto.data() != null ? dto.data() : LocalDate.now());
        depoimento.setPaciente(paciente);

        return depoimentoRepository.save(depoimento);
    }

    public void deletar(Long id) {
        depoimentoRepository.deleteById(id);
    }
}
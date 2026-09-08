package com.posoperatorio.api.service;

import com.posoperatorio.api.dto.PacienteDTO;
import com.posoperatorio.api.model.Paciente;
import com.posoperatorio.api.repository.PacienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service // Marca a classe como Service para conter as regras de negócio
public class PacienteService {

    private final PacienteRepository pacienteRepository;

    // Injeção de dependência via construtor
    public PacienteService(PacienteRepository pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }

    // Retorna a lista de todos os pacientes registrados
    public List<Paciente> listarTodos() {
        return pacienteRepository.findAll();
    }

    // Busca um paciente por ID encapsulado em um Optional
    public Optional<Paciente> buscarPorId(Long id) {
        return pacienteRepository.findById(id);
    }

    // Converte os dados do PacienteDTO e salva uma nova entidade no banco
    public Paciente salvar(PacienteDTO dto) {
        Paciente paciente = new Paciente();
        paciente.setNome(dto.nome());
        paciente.setCpf(dto.cpf());
        paciente.setTelefone(dto.telefone());
        paciente.setEmail(dto.email());

        return pacienteRepository.save(paciente);
    }

    // Exclui o registro de paciente pelo ID
    public void deletar(Long id) {
        pacienteRepository.deleteById(id);
    }
}
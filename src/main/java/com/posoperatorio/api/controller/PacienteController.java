package com.posoperatorio.api.controller;

import com.posoperatorio.api.dto.PacienteDTO;
import com.posoperatorio.api.model.Paciente;
import com.posoperatorio.api.service.PacienteService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pacientes")
@CrossOrigin(origins = "*")
public class PacienteController {

    private final PacienteService pacienteService;

    public PacienteController(PacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }

    // Lista todos os pacientes
    @GetMapping
    public ResponseEntity<List<Paciente>> listarTodos() {
        return ResponseEntity.ok(pacienteService.listarTodos());
    }

    // Busca um paciente por ID
    @GetMapping("/{id}")
    public ResponseEntity<Paciente> buscarPorId(@PathVariable Long id){
        return pacienteService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Cadastra um novo paciente validando o DTO
    @PostMapping
    public ResponseEntity<Paciente> salvar(@RequestBody @Valid PacienteDTO dto) {
        Paciente pacienteSalvo = pacienteService.salvar(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(pacienteSalvo);
    }

    // Remove um paciente por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (pacienteService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        pacienteService.deletar(id);
        return ResponseEntity.noContent().build();
    }

}

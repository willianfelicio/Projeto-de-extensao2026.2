package com.posoperatorio.api.controller;

import com.posoperatorio.api.dto.AtendimentoDTO;
import com.posoperatorio.api.model.Atendimento;
import com.posoperatorio.api.service.AtendimentoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Expõe a classe como um controlador REST
@RequestMapping("/atendimentos") // Define caminho base para os endpoints
@CrossOrigin(origins = "http://localhost:5173")
public class AtendimentoController {

    private final AtendimentoService atendimentoService;

    // Removido o ResponseEntityExceptionHandler do construtor
    public AtendimentoController(AtendimentoService atendimentoService) {
        this.atendimentoService = atendimentoService;
    }

    @GetMapping
    public ResponseEntity<List<Atendimento>> listarTodos() {
        return ResponseEntity.ok(atendimentoService.listarTodos()); // Corrigido para letra minúscula
    }

    @GetMapping("/{id}")
    public ResponseEntity<Atendimento> buscarPorId(@PathVariable Long id) {
        return atendimentoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Atendimento> salvar(@RequestBody @Valid AtendimentoDTO dto) {
        Atendimento atendimentoSalvo = atendimentoService.salvar(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(atendimentoSalvo); // Corrigido para atendimentoSalvo
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) { // Corrigido para id (com 'i' minúsculo)
        if (atendimentoService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        atendimentoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
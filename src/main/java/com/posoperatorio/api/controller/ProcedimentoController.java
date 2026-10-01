package com.posoperatorio.api.controller;

import com.posoperatorio.api.dto.ProcedimentoDTO;
import com.posoperatorio.api.model.Procedimento;
import com.posoperatorio.api.service.ProcedimentoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/procedimentos")
@CrossOrigin(origins = "*")
public class ProcedimentoController {

    private final ProcedimentoService procedimentoService;

    public ProcedimentoController(ProcedimentoService procedimentoService) {
        this.procedimentoService = procedimentoService;
    }

    // Lista todos os procedimentos
    @GetMapping
    public ResponseEntity<List<Procedimento>> listarTodos() {
        return ResponseEntity.ok(procedimentoService.listarTodos());
    }

    // Busca um procedimento por ID
    @GetMapping("/{id}")
    public ResponseEntity<Procedimento> buscarPorId(@PathVariable Long id) {
        return procedimentoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Cadastra um novo procedimento usando o DTO
    @PostMapping
    public ResponseEntity<Procedimento> salvar(@RequestBody @Valid ProcedimentoDTO dto) {
        Procedimento procedimentoSalvo = procedimentoService.salvar(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(procedimentoSalvo);
    }

    // Remove um procedimento por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (procedimentoService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        procedimentoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
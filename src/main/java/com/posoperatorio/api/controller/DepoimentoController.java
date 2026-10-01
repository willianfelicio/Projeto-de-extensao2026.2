package com.posoperatorio.api.controller;

import com.posoperatorio.api.dto.DepoimentoDTO;
import com.posoperatorio.api.model.Depoimento;
import com.posoperatorio.api.service.DepoimentoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//Controller responsável por expor os endpoints da API de gerenciamento de Depoimentos.
@RestController
@RequestMapping("/depoimentos")
@CrossOrigin(origins = "*")
public class DepoimentoController {

    private final DepoimentoService depoimentoService;

    // Construtor para injeção de dependência do DepoimentoService
    public DepoimentoController(DepoimentoService depoimentoService) {
        this.depoimentoService = depoimentoService;
    }

    // Endpoint para listar todos os depoimentos
    @GetMapping
    public ResponseEntity<List<Depoimento>> listarTodos() {
        return ResponseEntity.ok(depoimentoService.listarTodos());
    }

    // Endpoint para buscar um depoimento por ID
    @GetMapping("/{id}")
    public ResponseEntity<Depoimento> buscarPorId(@PathVariable Long id) {
        return depoimentoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Endpoint para salvar um novo depoimento
    @PostMapping
    public ResponseEntity<Depoimento> salvar(@RequestBody @Valid DepoimentoDTO dto) {
        Depoimento depoimentoSalvo = depoimentoService.salvar(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(depoimentoSalvo);
    }
    // Endpoint para deletar um depoimento por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (depoimentoService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        depoimentoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
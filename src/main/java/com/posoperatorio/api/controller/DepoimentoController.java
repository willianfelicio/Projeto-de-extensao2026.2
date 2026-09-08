package com.posoperatorio.api.controller;

import com.posoperatorio.api.dto.DepoimentoDTO;
import com.posoperatorio.api.model.Depoimento;
import com.posoperatorio.api.service.DepoimentoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/depoimentos")
public class DepoimentoController {

    private final DepoimentoService depoimentoService;

    public DepoimentoController(DepoimentoService depoimentoService) {
        this.depoimentoService = depoimentoService;
    }

    @GetMapping
    public ResponseEntity<List<Depoimento>> listarTodos() {
        return ResponseEntity.ok(depoimentoService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Depoimento> buscarPorId(@PathVariable Long id) {
        return depoimentoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Depoimento> salvar(@RequestBody @Valid DepoimentoDTO dto) {
        Depoimento depoimentoSalvo = depoimentoService.salvar(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(depoimentoSalvo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        if (depoimentoService.buscarPorId(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        depoimentoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
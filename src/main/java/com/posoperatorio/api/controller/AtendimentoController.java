package com.posoperatorio.api.controller;

import com.posoperatorio.api.dto.AtendimentoDTO;
import com.posoperatorio.api.model.Atendimento;
import com.posoperatorio.api.service.AtendimentoService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.List;

@RestController //Expõe a classe como um controlador rest
@RequestMapping("/atendimentos") //Define caminho base para o endpoints
public class AtendimentoController {
    private final AtendimentoService atendimentoService;
    private final ResponseEntityExceptionHandler responseEntityExceptionHandler;

    public AtendimentoController (AtendimentoService atendimentoService, ResponseEntityExceptionHandler responseEntityExceptionHandler){
        this.atendimentoService = atendimentoService;
        this.responseEntityExceptionHandler = responseEntityExceptionHandler;
    }
    @GetMapping
    public ResponseEntity<List<Atendimento>> ListarTodos(){
        return ResponseEntity.ok(atendimentoService.ListarTodos());
    }
    @GetMapping("/{id}")
    public ResponseEntity<Atendimento> buscarPorId(@PathVariable Long id){
        return atendimentoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    @PostMapping
    public ResponseEntity<Atendimento> salvar(@RequestBody @Valid AtendimentoDTO dto){
        Atendimento atendimentoSalvo = atendimentoService.salvar(dto);
          return ResponseEntity.status(HttpStatus.CREATED).body(AtendimentoSalvo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long Id){
        if (atendimentoService.buscarPorId(id).isEmpty()){
            return ResponseEntity.notFound().build();
        }
        atendimentoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
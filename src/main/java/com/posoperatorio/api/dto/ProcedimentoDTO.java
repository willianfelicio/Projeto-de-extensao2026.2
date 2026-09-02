package com.posoperatorio.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record ProcedimentoDTO(
        // Identificador único do procedimento
        Long id,

        // Valida se o texto não é nulo e nem composto apenas por espaços
        @NotBlank(message = "O nome é obrigatório")
        String nome,
        String descricao,

        // Valida se o valor monetário foi informado
        @NotNull(message = "O valor é obrigatório")
        BigDecimal valor,

        // Tempo estimado de duração em minutos
        Integer duracaoMinutos
){}
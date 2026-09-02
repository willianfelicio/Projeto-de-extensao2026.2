package com.posoperatorio.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.math.BigDecimal;

// Record: Estrutura imutável do Java usada para trafegar dados (Data Transfer Object)
public record ProcedimentoDTO(
        // Identificador único do procedimento (nulo na criação, preenchido na resposta)
        Long id,

        // Valida se o campo não é nulo e não contém apenas espaços em branco
        @NotBlank(message = "O nome do procedimento é obrigatório")
        String nome,

        // Descrição detalhada do procedimento (opcional)
        String descricao,

        // Valida se o valor monetário foi informado
        @NotNull(message = "O valor é obrigatório")
        BigDecimal valor,

        // Tempo estimado de duração em minutos (opcional)
        Integer duracaoMinutos
) {}
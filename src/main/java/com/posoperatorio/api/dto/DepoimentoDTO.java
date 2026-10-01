package com.posoperatorio.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

// DTO (Data Transfer Object) para a entidade Depoimento
public record DepoimentoDTO(
        Long id,

        @NotBlank(message = "O depoimento não pode estar em branco")
        String texto,

        @NotNull(message = "A nota é obrigatória")
        Integer nota,

        LocalDate data,

        @NotNull(message = "O ID do paciente é obrigatório")
        Long pacienteId // Certifique-se de que está escrito exatamente 'pacienteId'
) {}
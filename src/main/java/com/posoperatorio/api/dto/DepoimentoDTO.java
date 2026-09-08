package com.posoperatorio.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

public record DepoimentoDTO(
        Long id,

        //impede textos vazios ou preenchidos com espaços
        @NotBlank(message = "O depoimento não pode estar em branco")
        String texto,

        //Garante que a nota de avaliação foi fornecida
        @NotNull(message = "A nota é obrigatória")
        Integer nota,

        LocalDate data,

        //Associa o id ao depoimento do paciente
        @NotNull(message = "O id do paciente é obrigatório")
        Long pacienteid
){}
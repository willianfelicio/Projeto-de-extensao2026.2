package com.posoperatorio.api.dto;

import jakarta.validation.constraints.NotBlank;

public record AtendimentoDTO(
        Long id,

        @NotBlank(message = "O nome é obrigatório")
        String nome,

        @NotBlank(message = "O CPF é obrigatório")
        String cpf,

        @NotBlank(message = "O e-mail é obrigatório")
        String email,

        String dataNascimento,
        String procedimento,
        String dataPrevista,
        String nivelDor,
        String observacoes,
        String telefone,
        String nomeCirurgiao,
        String hospital,
        String cidade,
        String necessidades,
        Boolean autorizo
) {}
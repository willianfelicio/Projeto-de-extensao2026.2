package com.posoperatorio.api.dto;

import jakarta.validation.constraints.NotNull;
import java.time.LocalDateTime;

public record AtendimentoDTO(
        Long id,

        //Garante que a data e o horário do atendimento foram informados
        @NotNull(message = "A data e hora são obrigatórios")
        LocalDateTime dataHora,

        String observacoes,

        String status,

        //Recebe apenas o ID do paciente vinculado
        @NotNull(message = "O ID do paciente é obrigatório")
        Long pacienteId,

        //Recebe o Id do procedimento vinculado
        @NotNull(message = "O Id do procedimento é obrigatório")
        Long procedimentoId
){}
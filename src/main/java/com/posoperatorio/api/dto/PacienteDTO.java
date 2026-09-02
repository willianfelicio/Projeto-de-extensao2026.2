    package com.posoperatorio.api.dto;

    import jakarta.validation.constraints.Email;
    import jakarta.validation.constraints.NotBlank;
    import jakarta.validation.constraints.Pattern;

    public record PacienteDTO(
            Long id,

        @NotBlank(message = "O Nome é obrigatório")
        String nome,

        @NotBlank(message = "O CPF é obrigatório")
        @Pattern(regexp = "\\d{11}", message = "O CPF deve conter 11 Digitos Númericos")
        String cpf,

        @NotBlank(message = "O E-mail é obrigatório")
        @Email(message = "Informe um e-mail válido")
        String email,

        String telefone,
        ){}




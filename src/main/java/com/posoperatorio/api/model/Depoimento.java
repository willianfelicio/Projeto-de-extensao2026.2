package com.posoperatorio.api.model;

import jakarta.persistence.*; // Corrigido (era jakara.persistence.*)
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "tb_depoimentos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Depoimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O texto do depoimento é obrigatório")
    @Column(nullable = false, length = 1000)
    private String texto;

    @NotNull(message = "A nota é obrigatória")
    private Integer nota;

    private LocalDate data;

    @ManyToOne
    @JoinColumn(name = "paciente_id", nullable = false)
    private Paciente paciente;
}
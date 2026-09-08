package com.posoperatorio.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDateTime;

@Entity // Define a classe como uma entidade mapeada pelo JPA
@Table(name = "tb_atendimentos") // Nome da tabela no banco PostgreSQL
@Getter // Lombok: Cria métodos get para todos os atributos
@Setter // Lombok: Cria métodos set para todos os atributos
@NoArgsConstructor // Lombok: Construtor sem argumentos (obrigatório para JPA)
@AllArgsConstructor // Lombok: Construtor com todos os argumentos
@EqualsAndHashCode(of = "id") // Define a comparação entre instâncias baseando-se no ID
public class Atendimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Chave primária com auto-incremento
    private Long id;

    @NotNull(message = "A data e hora são obrigatórias")
    @Column(nullable = false)
    private LocalDateTime dataHora;

    private String observacoes;

    private String status;

    // Relacionamento Muitos-para-Um: Vários atendimentos podem pertencer a um Paciente
    @ManyToOne
    @JoinColumn(name = "paciente_id", nullable = false) // Cria a Foreign Key 'paciente_id'
    private Paciente paciente;

    // Relacionamento Muitos-para-Um: Vários atendimentos podem ser de um Procedimento
    @ManyToOne
    @JoinColumn(name = "procedimento_id", nullable = false) // Cria a Foreign Key 'procedimento_id'
    private Procedimento procedimento;
}
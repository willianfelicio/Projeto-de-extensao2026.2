package com.posoperatorio.api.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "atendimentos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Atendimento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String cpf;
    private String email;
    private String dataNascimento;
    private String procedimento;
    private String dataPrevista;
    private String nivelDor;

    @Column(columnDefinition = "TEXT")
    private String observacoes;

    private String telefone;
    private String nomeCirurgiao;
    private String hospital;
    private String cidade;

    @Column(columnDefinition = "TEXT")
    private String necessidades;

    private Boolean autorizo;
}
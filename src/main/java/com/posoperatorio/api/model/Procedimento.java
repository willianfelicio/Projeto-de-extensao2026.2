package com.posoperatorio.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;

// Define a classe como uma entidade JPA
@Entity
// Define o nome exato da tabela no PostgreSQL
@Table(name = "tb_procedimentos")
// Lombok: Gera automaticamente os métodos get e set para todos os campos
@Getter
@Setter
// Lombok: Cria o construtor padrão sem argumentos (exigido pelo JPA)
@NoArgsConstructor
// Lombok: Cria o construtor com todos os campos da classe
@AllArgsConstructor
// Lombok: Define a comparação de objetos baseada apenas no ID
@EqualsAndHashCode(of = "id")
public class Procedimento {

    @Id // Marca o campo como a Chave Primária
    @GeneratedValue(strategy = GenerationType.IDENTITY)// Configura o auto-incremento gerenciado pelo banco
    private Long id;

    @NotBlank(message = "O nome do procedimento é obrigatório")// Validação a nível de aplicação
    @Column(nullable = false)// Restrição a nível de banco de dados (NOT NULL)
    private String nome;

    private String descricao;

    @NotNull(message = "O valor é obrigatório")// Validação a nível de aplicação
    @Column(nullable = false)// Restrição a nível de banco de dados (NOT NULL)
    private BigDecimal valor;// BigDecimal garante precisão para cálculos e valores monetários

    private Integer duracaoMinutos;
}

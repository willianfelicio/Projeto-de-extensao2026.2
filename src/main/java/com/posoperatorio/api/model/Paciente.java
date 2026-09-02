package com.posoperatorio.api.model;

//importação de bibliotecas
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDate;


@Entity //Definir classe como entidade JPA (espalhada no banco de dados)
@Table(name = "tb_pacientes") //Especifica o nome da tabela que será criada no PostgreSQL
//Lombok : Gera automaticamente os métodos Getter e Setter
@Getter
@Setter
@NoArgsConstructor //Lombok : Gera o contrutor padrão sem argumentos (JPA exige)
@AllArgsConstructor //Lombok : Gera o construtor com todos os parâmetros
@EqualsAndHashCode(of = "id") //Lombok : Gera os métodos equals e hashCode baseados na chave primaria (id)
public class Paciente {

    @Id //Defini este campo como chave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Configura o auto-incremento
    private Long id;

    @NotBlank(message = "O nome é obrigatório") //Impede valores nulos, vazios ou apenas com espaços
    @Column(nullable = false) //Garante a restrição de NOT NULL na coluna
    private String nome;

    @NotBlank(message = "O CPF é obrigatório") //Torna o preenchimento obrigatório
    @Column(nullable = false , unique = true, length = 14) //Obrigatório com valor único e tamnho limite
    private String cpf;

    @Email(message = "E-mail inválido")//Valida o formato e-mails enviado
    @Column(unique = true) //impede e-mails duplicados
    private String email;

    private String telefone; //Campo simples, sem registro direto no banco e permite valor nulo
    private LocalDate dataNascimento; //Data de nascimento no formato ISO (YYYY-MM-DD)
}
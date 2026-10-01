package com.posoperatorio.api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "atendimentos")
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

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCpf() { return cpf; }
    public void setCpf(String cpf) { this.cpf = cpf; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getDataNascimento() { return dataNascimento; }
    public void setDataNascimento(String dataNascimento) { this.dataNascimento = dataNascimento; }

    public String getProcedimento() { return procedimento; }
    public void setProcedimento(String procedimento) { this.procedimento = procedimento; }

    public String getDataPrevista() { return dataPrevista; }
    public void setDataPrevista(String dataPrevista) { this.dataPrevista = dataPrevista; }

    public String getNivelDor() { return nivelDor; }
    public void setNivelDor(String nivelDor) { this.nivelDor = nivelDor; }

    public String getObservacoes() { return observacoes; }
    public void setObservacoes(String observacoes) { this.observacoes = observacoes; }

    public String getTelefone() { return telefone; }
    public void setTelefone(String telefone) { this.telefone = telefone; }

    public String getNomeCirurgiao() { return nomeCirurgiao; }
    public void setNomeCirurgiao(String nomeCirurgiao) { this.nomeCirurgiao = nomeCirurgiao; }

    public String getHospital() { return hospital; }
    public void setHospital(String hospital) { this.hospital = hospital; }

    public String getCidade() { return cidade; }
    public void setCidade(String cidade) { this.cidade = cidade; }

    public String getNecessidades() { return necessidades; }
    public void setNecessidades(String necessidades) { this.necessidades = necessidades; }

    public Boolean getAutorizo() { return autorizo; }
    public void setAutorizo(Boolean autorizo) { this.autorizo = autorizo; }
}
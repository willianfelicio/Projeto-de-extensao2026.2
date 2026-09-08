package com.posoperatorio.api.repository;

import com.posoperatorio.api.model.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// @Repository: Indica que a interface é um componente de acesso a dados do Spring
@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long> {
    // Ao herdar JpaRepository, temos métodos prontos como save(), findById(), findAll() e deleteById()
}

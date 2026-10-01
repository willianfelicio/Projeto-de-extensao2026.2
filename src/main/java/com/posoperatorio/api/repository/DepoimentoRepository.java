package com.posoperatorio.api.repository;

import com.posoperatorio.api.model.Depoimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Indica que a interface é um componente de acesso de dados do spring
@Repository
public interface DepoimentoRepository extends JpaRepository<Depoimento, Long> {
}
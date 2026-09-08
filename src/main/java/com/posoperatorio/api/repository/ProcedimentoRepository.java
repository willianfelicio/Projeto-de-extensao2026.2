package com.posoperatorio.api.repository;
import com.posoperatorio.api.model.Procedimento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//Interface responsável pelo acesso ao banco de dados PostgreSQL para a entidade Procedimento.
@Repository
public interface ProcedimentoRepository extends JpaRepository<Procedimento, Long> {
}

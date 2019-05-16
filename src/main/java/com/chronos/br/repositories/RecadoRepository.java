package com.chronos.br.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chronos.br.domain.Recado;

@Repository
public interface RecadoRepository extends JpaRepository<Recado, Integer>{

}

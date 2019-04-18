package com.chronos.br.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chronos.br.domain.Responsavel;

@Repository
public interface ResponsavelRepository extends JpaRepository<Responsavel, Integer>{

}

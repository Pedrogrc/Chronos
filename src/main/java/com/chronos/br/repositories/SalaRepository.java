package com.chronos.br.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chronos.br.domain.Sala;

@Repository
public interface SalaRepository extends JpaRepository<Sala, Integer>{

}

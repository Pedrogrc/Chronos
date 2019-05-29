package com.chronos.br.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chronos.br.domain.Evento;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Integer>{

}

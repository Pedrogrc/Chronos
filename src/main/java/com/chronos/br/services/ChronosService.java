package com.chronos.br.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chronos.br.domain.Evento;
import com.chronos.br.repositories.EventoRepository;

@Service
public class ChronosService {
	
	@Autowired
	private EventoRepository evtRepo;
	
	public List<Evento> findAll() {
		return evtRepo.findAll();
	}

}

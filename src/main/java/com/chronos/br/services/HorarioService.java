package com.chronos.br.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chronos.br.domain.Evento;
import com.chronos.br.repositories.EventoRepository;
import com.chronos.br.services.exception.ObjectNotFoundException;

@Service
public class HorarioService {
	
	@Autowired
	private EventoRepository evtRepo;
	
	public List<Evento> listAll(){
			return evtRepo.findAll();
	}

	public Evento findId(Integer id) {
		Optional<Evento> obj = evtRepo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException("Evento não encontrado!"));
	}

	public void delete(Integer id) {
		findId(id);
		evtRepo.deleteById(id);

	}

	public Evento update(Evento obj) {
		return evtRepo.save(obj);
	}

	public Evento insert(Evento obj) {
		obj.setId(null);
		return evtRepo.save(obj);
	}

}

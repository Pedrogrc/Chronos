package com.chronos.br.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avaliacao.br.services.exceptions.ObjectNotFoundException;
import com.chronos.br.domain.Evento;
import com.chronos.br.repositories.EventoRepository;

@Service
public class ChronosService {
	
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

	public void update(Evento obj, Integer id) {

		findId(id);
		obj.setId(id);
		evtRepo.save(obj);

	}

	public void insert(Evento obj) {
		obj.setId(null);
		evtRepo.save(obj);
	}

}

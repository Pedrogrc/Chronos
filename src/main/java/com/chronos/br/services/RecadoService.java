package com.chronos.br.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chronos.br.domain.Recado;
import com.chronos.br.repositories.RecadoRepository;
import com.chronos.br.services.exception.ObjectNotFoundException;

@Service
public class RecadoService {


	@Autowired
	private RecadoRepository recRepo;
	
	public List<Recado> listAll(){
			return recRepo.findAll();
	}

	public Recado findById(Integer id) {
		Optional<Recado> obj = recRepo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException("Recado não encontrado!"));
	}

	public void delete(Integer id) {
		findById(id);
		recRepo.deleteById(id);

	}

	public Recado update(Recado obj) {
		return recRepo.save(obj);
	}

	public Recado insert(Recado obj) {
		obj.setId(null);
		return recRepo.save(obj);
	}

}


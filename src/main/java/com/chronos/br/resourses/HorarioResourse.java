package com.chronos.br.resourses;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.chronos.br.domain.Evento;
import com.chronos.br.services.HorarioService;

@RestController
@RequestMapping(value = "/horario")
public class HorarioResourse {
	
	@Autowired
	private HorarioService service;
	
	@CrossOrigin
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Evento>> findAll() {
		List<Evento> lista = service.listAll();
		return ResponseEntity.ok(lista);
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Evento> buscar(@PathVariable Integer id) {
		Evento obj = service.findId(id);
		return ResponseEntity.ok(obj);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deletar(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> update(@RequestBody Evento obj, @PathVariable Integer id) {
		service.update(obj);
		return ResponseEntity.noContent().build();
	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insert(@RequestBody Evento obj) {
		service.insert(obj);
		return ResponseEntity.noContent().build();
	}

}

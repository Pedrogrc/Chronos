package com.chronos.br.resourses;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.chronos.br.domain.Evento;
import com.chronos.br.services.ChronosService;

@RestController
@RequestMapping(value = "/horario")
public class ChronosResourse {
	
	@Autowired
	private ChronosService service;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Evento>> ListAll() {

		List<Evento> lista = service.listAll();

		return ResponseEntity.ok(lista);
	}

}

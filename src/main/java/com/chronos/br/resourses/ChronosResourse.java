package com.chronos.br.resourses;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.chronos.br.domain.Evento;
import com.chronos.br.domain.Recado;
import com.chronos.br.services.HorarioService;
import com.chronos.br.services.RecadoService;

@RestController
@RequestMapping(value = "/")
public class ChronosResourse {
	
	@Autowired
	private HorarioService service;
	
	private RecadoService recService;
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Evento>> ListAllEvt() {

		List<Evento> lista = service.listAll();
		return ResponseEntity.ok(lista);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Recado>> ListAllRec() {

		List<Recado> lista = recService.listAll();
		return ResponseEntity.ok(lista);
	}

}

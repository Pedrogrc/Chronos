package com.chronos.br.resourses;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.chronos.br.domain.Evento;
import com.chronos.br.domain.Login;
import com.chronos.br.services.ChronosService;

@RestController
@RequestMapping(value = "/login")
public class LoginResourse {
	
	@Autowired
	private ChronosService service;
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insert(@RequestBody Login obj) {
		service.insert(obj);
		return ResponseEntity.noContent().build();

	}
}

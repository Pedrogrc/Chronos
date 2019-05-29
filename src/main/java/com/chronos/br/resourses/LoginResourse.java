package com.chronos.br.resourses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.chronos.br.domain.Login;
import com.chronos.br.services.LoginService;

@RestController
@RequestMapping(value = "/login")
public class LoginResourse {
	
	@Autowired
	private LoginService service;
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insert(@RequestBody Login obj) {
		service.insert(obj);
		return ResponseEntity.noContent().build();

	}
}

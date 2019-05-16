package com.chronos.br.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chronos.br.domain.Login;
import com.chronos.br.repositories.LoginRepository;

@Service
public class LoginService {
	
	@Autowired
	private LoginRepository logRepo;
	
	public void insert(Login obj) {
		logRepo.exists(null);
	}

}

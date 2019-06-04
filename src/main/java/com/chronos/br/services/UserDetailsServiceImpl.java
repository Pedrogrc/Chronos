package com.chronos.br.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.chronos.br.domain.Usuario;
import com.chronos.br.repositories.LoginRepository;
import com.chronos.br.security.UserSS;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private LoginRepository logRepo;
	
	@Override
	public UserDetails loadUserByUsername(String user) throws UsernameNotFoundException {
		
		Usuario usuario = logRepo.findByUsuario(user);
		
		if (usuario == null) {
			throw new UsernameNotFoundException(user);
		}
		
		return new UserSS(usuario);
	}

}

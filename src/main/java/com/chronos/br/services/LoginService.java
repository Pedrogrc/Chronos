package com.chronos.br.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chronos.br.domain.Recado;
import com.chronos.br.domain.Usuario;
import com.chronos.br.repositories.LoginRepository;
import com.chronos.br.services.exception.ObjectNotFoundException;

@Service
public class LoginService {
	
	@Autowired
	private LoginRepository logRepo;
	public List<Usuario> listAll(){
		return logRepo.findAll();
}

	public Usuario findById(Integer id) {
		Optional<Usuario> obj = logRepo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException("Recado não encontrado!"));
}

	public void delete(Integer id) {
	findById(id);
	logRepo.deleteById(id);

}

	public Usuario update(Usuario obj) {
	return logRepo.save(obj);
}

	public Usuario insert(Usuario obj) {
	obj.setId(null);
	return logRepo.save(obj);
}

}
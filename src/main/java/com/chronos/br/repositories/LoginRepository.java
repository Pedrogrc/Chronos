package com.chronos.br.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.chronos.br.domain.Usuario;

@Repository
public interface LoginRepository extends JpaRepository<Usuario, Integer>{
	@Transactional(readOnly=true)
	Usuario findByUsuario(String usuario);

}

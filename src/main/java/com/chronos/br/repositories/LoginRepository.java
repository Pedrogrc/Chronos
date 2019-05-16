package com.chronos.br.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chronos.br.domain.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer>{

}

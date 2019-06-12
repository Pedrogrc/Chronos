package com.chronos.br.dto;

import java.io.Serializable;

public class CredenciaisDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String usuario;
	private String senha;

	public CredenciaisDTO() {
		
	}

	public String getUsuario() {
		return usuario;
	}

	public void setEmail(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	

	
}

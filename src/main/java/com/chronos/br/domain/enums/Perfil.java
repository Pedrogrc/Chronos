package com.chronos.br.domain.enums;


public enum Perfil {
	ADMIN(1, "ROLE_ADMIN");

	private int codigo;
	private String descricao;

	private Perfil(int codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}

	public int getCodigo() {
		return codigo;
	}

	public String getDescricao() {
		return descricao;
	}

	public static Perfil toEnum(Integer codigo) {
		if (codigo == null) return null;
		
		for (Perfil tipo : Perfil.values()) {
			if (codigo.equals(tipo.getCodigo())) {
				return tipo;
			}
		}
		
		throw new IllegalArgumentException("Id Inválido: " + codigo);
	}
}



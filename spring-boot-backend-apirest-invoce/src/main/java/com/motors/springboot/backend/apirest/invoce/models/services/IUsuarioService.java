package com.motors.springboot.backend.apirest.invoce.models.services;

import com.motors.springboot.backend.apirest.invoce.models.entity.Usuario;

public interface IUsuarioService {

	public Usuario findByUsername(String username);
}

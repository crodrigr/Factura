package com.motors.springboot.backend.apirest.invoce.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.motors.springboot.backend.apirest.invoce.models.entity.Cliente;
import com.motors.springboot.backend.apirest.invoce.models.entity.Region;


public interface IClienteDao extends JpaRepository<Cliente,Long> {
	
	@Query("from Region")
	public List<Region> findAllRegiones();

}

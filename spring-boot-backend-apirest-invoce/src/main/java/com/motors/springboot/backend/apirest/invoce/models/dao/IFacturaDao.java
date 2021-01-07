package com.motors.springboot.backend.apirest.invoce.models.dao;


import org.springframework.data.repository.CrudRepository;

import com.motors.springboot.backend.apirest.invoce.models.entity.Factura;

public interface IFacturaDao extends CrudRepository<Factura, Long>{

}
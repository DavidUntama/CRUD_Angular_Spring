package com.example.ejemplo01;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PersonaServiceImp implements PersonaService{    
    @Autowired
    private PersonaRepositorio repositorio;

    @Override
    public List<Persona> listar() {
        return repositorio.findAll();
    }

    @Override
    public Persona listById(int id) {
        return repositorio.findById(id);
    }

    @Override
    public Persona add(Persona p) {
        return repositorio.save(p);
    }

    @Override
    public Persona editar(Persona p) {
        return repositorio.save(p);
    }

    @Override
    public boolean delete(int id) {
          boolean exists = repositorio.existsById(id);
          if ( exists ) repositorio.deleteById(id);          
          return exists;
    }
    
}

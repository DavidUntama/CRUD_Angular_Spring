package com.example.ejemplo01;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonaRepositorio extends JpaRepository<Persona, Integer> {
    List<Persona>findAll();
    Persona findById(int id);    
    Persona save(Persona p);
    void deleteById(int id);
}

package com.example.ejemplo01;
import java.util.List;

public interface PersonaService {
    List<Persona>listar();
    Persona listById(int id);
    Persona add(Persona p);
    Persona editar(Persona p);
    boolean delete(int id);
}

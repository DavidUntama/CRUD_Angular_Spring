package com.example.ejemplo01;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin (origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping ( {"/personas"} )
public class Controlador {
    @Autowired
    PersonaService service;
    
    @GetMapping
    public List<Persona>listar () {
        return service.listar () ;
    }
    
    @PostMapping
    public Persona agregar(@RequestBody Persona p){
        return service.add(p);
    }
    
    @GetMapping(path = {"/{id}"})
    public Persona listarById(@PathVariable("id") int id){
        return service.listById(id);
    }
    
    @PutMapping(path = {"/{id}"})
    public Persona editar(@RequestBody Persona p, @PathVariable("id") int id){
        p.setId(id);
        return service.editar(p);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable("id") int id) {
        
        
        if (service.delete(id)) {            
            return ResponseEntity.ok("Persona eliminada exitosamente");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Persona no encontrada");
        }
    }

}

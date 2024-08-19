
package com.example.ejemplo01;

import jakarta.persistence.*;


@Entity
@Table(name="personas")

public class Persona {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)    
    private int id;
    @Column
    private String nombres;
    @Column
    private String apellidos;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    
    
}

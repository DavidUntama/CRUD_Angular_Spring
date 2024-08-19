import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Service } from '../../Service/service.service';
import { Persona } from '../../Modelo/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  srv = inject(Service)
  router = inject(Router)
  per: Persona = {id: 0, nombres: "", apellidos: ""}
  
  onSubmit() {
    this.srv.createPersona(this.per).subscribe({
      next: (p) =>{ 
        alert(`Persona Creada: ${p.nombres} ${p.apellidos}`); 
        this.router.navigate(['listar']) }
    })
  }

}

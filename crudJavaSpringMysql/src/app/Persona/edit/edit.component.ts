import { Component, inject } from '@angular/core';
import { Persona } from '../../Modelo/Persona';
import { FormsModule } from '@angular/forms';
import { Service } from '../../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  srv = inject(Service);
  persona: Persona = {id: 0, nombres: "", apellidos: ""};
  router = inject(Router);

  onSubmit() {
    this.savePersona();
  }
  ngOnInit(): void {
    this.getPersonaById();
  }
  getPersonaById(){
    let id = localStorage.getItem("id")||'0';
    this.srv.getPersonaById(+id).subscribe({
      next: (p) => this.persona = p
    })
  }
  savePersona(){
    this.srv.updatePersona(this.persona).subscribe({
      next: (p) => {
        this.persona = p;
        alert('Persona editada');
        this.router.navigate(['listar']);
      }
    })
  }
}

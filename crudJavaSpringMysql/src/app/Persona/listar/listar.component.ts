import { Component, inject } from '@angular/core';
import { Service } from '../../Service/service.service';
import { Persona } from '../../Modelo/Persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
})
export class ListarComponent {
  srv = inject(Service);
  personas: Persona[] = [];
  router = inject(Router);

  ngOnInit(): void {
    this.srv.getPersonas().subscribe({
      next: (p) => (this.personas = p),
    });
  }
  edit(persona: Persona) {
    localStorage.setItem('id', persona.id.toString());
    this.router.navigate(['edit']);
  }

  delete(id: number, i: number) {
    if (confirm('¿Estas seguro?')) {
      this.srv.deletePersona(id).subscribe({
        next: (m) => {
          alert(m);
          this.personas.splice(i, 1);
        },
        error: (err) => {
          alert(err);
        },
      });
    }
  }
}

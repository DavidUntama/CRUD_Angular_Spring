import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Service {
  http = inject(HttpClient);
  url = 'http://localhost:8080/personas';

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url);
  }
  createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url, persona);
  }

  getPersonaById(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.url}/${id}`);
  }
  updatePersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.url}/${persona.id}`, persona);
  }
  deletePersona(id: number): Observable<string> {
    return this.http.delete(`${this.url}/${id}`, {
      responseType: 'text',
    });
  }
}

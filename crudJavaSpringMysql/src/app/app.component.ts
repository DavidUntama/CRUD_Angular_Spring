import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD Angular con Spring Boot usando MySQL';
  listar() {
    console.log('Hola');
  }
  nuevo() {
    console.log('Hola');
  }
}

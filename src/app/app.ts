import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';  
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, CardModule, InputTextModule],  
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'mi-primera-app';
  
  // Método de ejemplo para el botón
  mostrarMensaje() {
    alert('¡Funciona PrimeNG!');
  }
}

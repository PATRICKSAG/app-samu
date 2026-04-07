import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';  
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, CardModule, InputTextModule, RouterOutlet],  
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Sub Gerencia de Regulación Sectorial';
  
}

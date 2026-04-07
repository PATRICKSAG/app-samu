import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';  
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RouterOutlet, RouterOutletContract } from '@angular/router';
import { fadeAnimation } from './animations/page-animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, CardModule, InputTextModule, RouterOutlet],  
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [fadeAnimation] 
})
export class App {
  title = 'Sub Gerencia de Regulación Sectorial';
    prepareRoute(outlet: RouterOutletContract) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

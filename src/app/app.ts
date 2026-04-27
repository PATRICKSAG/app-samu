import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';  
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RouterOutlet, RouterOutletContract } from '@angular/router';
import { scaleAnimation } from './animations/page-animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faDesktop, faLeaf, faFilePdf, faSyringe } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faDesktop, faLeaf, faFilePdf, faSyringe);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, CardModule, InputTextModule, RouterOutlet, FontAwesomeModule],  
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [scaleAnimation] 
})
export class App {
  title = 'Sub Gerencia de Regulación Sectorial';
    prepareRoute(outlet: RouterOutletContract) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

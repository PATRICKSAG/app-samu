import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar';
import {Footer} from '../../layout/footer/footer';

@Component({
  selector: 'app-ufresa',
  standalone: true,
  imports: [CommonModule, MenuBarComponent, Footer],
  templateUrl: './ufresa.html',
  styleUrl: './ufresa.scss',
})
export class Ufresa {
   title = 'UFRESA';
  description = 'Unidad Funcional de Regulación Salud Ambiental';
  icon = 'pi-verified';
  sectionColor = '#e8a735';

  features = [
    {
      icon: 'pi-heart',
      title: 'Calidad en Servicios',
      description: 'Regulación y supervisión de la calidad en prestaciones de salud'
    },
    {
      icon: 'pi-desktop',
      title: 'Tecnología Médica',
      description: 'Evaluación y control de equipos biomédicos y tecnologías sanitarias'
    },
    {
      icon: 'pi-chart-line',
      title: 'Innovación',
      description: 'Fomento de la innovación tecnológica en el sector salud'
    }
  ];
}

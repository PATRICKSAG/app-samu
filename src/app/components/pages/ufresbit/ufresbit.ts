import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar';
import {Footer} from '../../layout/footer/footer';

@Component({
  selector: 'app-ufresbit',
  standalone: true,
  imports: [CommonModule, MenuBarComponent, Footer],
  templateUrl: './ufresbit.html',
  styleUrl: './ufresbit.scss',
})
export class Ufresbit {
  title = 'UFRESBIT';
  description = 'Unidad Funcional de Regulación en Servicios y Tecnología';
  icon = 'pi-desktop';
  sectionColor = '#2c8c6e'; 
  
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

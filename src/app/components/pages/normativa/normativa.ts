import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar';
import {Footer} from '../../layout/footer/footer';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-normativa',
  standalone: true,
  imports: [CommonModule, MenuBarComponent, Footer],
  templateUrl: './normativa.html',
  styleUrl: './normativa.scss',
})
export class Normativa {
  title = 'Normativa y Documentos';
  description = 'Acceso a leyes, decretos, resoluciones y documentos técnicos del sector salud.';
  icon = 'pi-file-pdf';
  sectionColor  = '#c94f4f';

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

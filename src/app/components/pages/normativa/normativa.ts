import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar';
import {Footer} from '../../layout/footer/footer';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faDesktop, faLeaf, faFilePdf, faSyringe } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-normativa',
  standalone: true,
  imports: [CommonModule, MenuBarComponent, Footer, FontAwesomeModule],
  templateUrl: './normativa.html',
  styleUrl: './normativa.scss',
})
export class Normativa {
  title = 'Normativa y Documentos';
  description = 'Acceso a leyes, decretos, resoluciones y documentos técnicos del sector salud.';
  icon = 'pi-file-pdf';
  sectionColor  = '#c94f4f';
  faSyringe = faSyringe;
  faHeart = faHeart;
  faDesktop = faDesktop;
  faLeaf = faLeaf;
  faFilePdf = faFilePdf;

  features = [
    {
      icon: this.faHeart,
      title: 'Calidad en Servicios',
      description: 'Regulación y supervisión de la calidad en prestaciones de salud'
    },
    {
      icon: this.faDesktop,
      title: 'Tecnología Médica',
      description: 'Evaluación y control de equipos biomédicos y tecnologías sanitarias'
    },
    {
      icon: this.faFilePdf,
      title: 'Innovación',
      description: 'Fomento de la innovación tecnológica en el sector salud'
    }
  ];
      getIconForSection() {
 
      return this.faFilePdf;
  }
}

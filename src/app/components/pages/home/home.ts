import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar';
import { Footer } from '../../layout/footer/footer';
import { FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faHeart,
  faDesktop,
  faLeaf,
  faFilePdf,
  faSyringe,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';
interface Section {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  color: string;
  textColor?: string;
  route: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    MenuBarComponent,
    Footer,
    FaIconComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  faSyringe = faSyringe;
  faHeart = faHeart;
  faDesktop = faDesktop;
  faLeaf = faLeaf;
  faFilePdf = faFilePdf;
  faBuilding = faBuilding;
  sections: Section[] = [
    {
      id: 'ufremid',
      title: 'UFREMID',
      subtitle: 'Unidad Funcional de Regulación de Medicamentos, Insumos y Drogas',
      icon: 'faSyringe',
      description:
        'Regulación y control de medicamentos, productos farmacéuticos, insumos médicos y sustancias controladas.',
      color: '#1a5f7a',
      textColor: '#ffffff',
      route: '/ufremid',
    },
    {
      id: 'ufresbit',
      title: 'UFRESBIT',
      subtitle: 'Unidad Funcional de Regulación en Servicios y Tecnología',
      icon: 'faDesktop',
      description:
        'Regulación de servicios de salud, tecnologías médicas, equipos biomédicos e innovación tecnológica.',
      color: '#2c8c6e',
      textColor: '#ffffff',
      route: '/ufresbit',
    },
    {
      id: 'ufresa',
      title: 'UFRESA',
      subtitle: 'Unidad Funcional de Regulación Salud Ambiental',
      icon: 'faLeaf',
      description:
        'Regulación de factores ambientales que afectan la salud, saneamiento básico y gestión de riesgos.',
      color: '#e8a735',
      textColor: '#ffffff',
      route: '/ufresa',
    },
    {
      id: 'normativa',
      title: 'Normativa',
      subtitle: 'Marco Legal y Documentos Normativos',
      icon: 'faFilePdf',
      description: 'Acceso a leyes, decretos, resoluciones y documentos técnicos del sector salud.',
      color: '#c94f4f',
      textColor: '#ffffff',
      route: '/normativa',
    },
  ];
  getIconForSection(sectionId: string) {
    switch (sectionId) {
      case 'ufremid':
        return this.faSyringe;
      case 'ufresbit':
        return this.faBuilding;
      case 'ufresa':
        return this.faLeaf;
      case 'normativa':
        return this.faFilePdf;
      default:
        return this.faHeart;
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar';
import {Footer} from '../../layout/footer/footer';
import { PowerBiReportComponent } from '../power-bi-report/power-bi-report';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faDesktop, faLeaf, faFilePdf, faSyringe,faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ufresbit',
  standalone: true,
  imports: [CommonModule, MenuBarComponent, Footer, FontAwesomeModule, PowerBiReportComponent],
  templateUrl: './ufresbit.html',
  styleUrl: './ufresbit.scss',
})
export class Ufresbit {
  title = 'UFRESBIT';
  description = 'Unidad Funcional de Regulación en Servicios y Tecnología';
  icon = 'pi-desktop';
  sectionColor = '#2c8c6e'; 
  areaOrigen = 'UFRESBIT';
  faSyringe = faSyringe;
  faHeart = faHeart;
  faDesktop = faDesktop;
  faLeaf = faLeaf;
  faFilePdf = faFilePdf;
  faBuilding = faBuilding;
  powerBiUrl = 'https://app.powerbi.com/view?r=eyJrIjoiNmUwMWIxODItNmY2Ni00ZjFkLTkxMDYtOGJjYThhZjQyOGE3IiwidCI6ImRjNDFhYWZkLWFkNjgtNGZiZC1hOTE5LWJmM2NjYjhjNTEyMSJ9';
  wallpaperUrl = 'https://i.postimg.cc/HLykzXQn/Gemini-Generated-Image-cqq68hcqq68hcqq6.png';
  
getHeaderStyle() {
  return {
    background: `linear-gradient(135deg, ${this.sectionColor}CC, ${this.sectionColor}CC), url('${this.wallpaperUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // backgroundBlendMode: 'overlay'   // o 'soft-light'
  };
}

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

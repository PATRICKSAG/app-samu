import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar';
import {Footer} from '../../layout/footer/footer';
// import { PowerBiReport } from '../power-bi-report/power-bi-report';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faDesktop, faLeaf, faFilePdf, faSyringe } from '@fortawesome/free-solid-svg-icons';
import { PowerBiReportComponent } from "../power-bi-report/power-bi-report";

@Component({
  selector: 'app-ufresa',
  standalone: true,
  imports: [CommonModule, MenuBarComponent, Footer, FontAwesomeModule, PowerBiReportComponent],
  templateUrl: './ufresa.html',
  styleUrl: './ufresa.scss',
})
export class Ufresa {
   title = 'UFRESA';
  description = 'Unidad Funcional de Regulación Salud Ambiental';
  icon = 'pi-verified';
  sectionColor = '#e8a735';
  areaOrigen = 'UFRESA';
  faSyringe = faSyringe;
  faHeart = faHeart
  faDesktop = faDesktop;
  faLeaf = faLeaf;
  faFilePdf = faFilePdf;
  powerBiUrl = 'https://app.powerbi.com/view?r=eyJrIjoiNWJjNzRmZTItMGY3NS00ZjY5LTgzM2QtODU4YWZiOTA0Nzg5IiwidCI6ImRjNDFhYWZkLWFkNjgtNGZiZC1hOTE5LWJmM2NjYjhjNTEyMSJ9';
  wallpaperUrl = 'https://i.postimg.cc/zGMfT0Rq/Gemini-Generated-Image-ajekfkajekfkajek.png';
  
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

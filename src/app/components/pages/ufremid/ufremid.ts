import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar';
import {Footer} from '../../layout/footer/footer';
import { PowerBiReport } from '../power-bi-report/power-bi-report';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faDesktop, faLeaf, faFilePdf, faSyringe } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faHeart, faDesktop, faLeaf, faFilePdf, faSyringe);
@Component({
  selector: 'app-ufremid',
  standalone: true,
  imports: [CommonModule, MenuBarComponent, Footer, PowerBiReport, FontAwesomeModule],
  templateUrl: './ufremid.html',
  styleUrl: './ufremid.scss',
})
export class Ufremid {
  
  title = 'UFREMID';
  description = 'Unidad Funcional de Regulación de Medicamentos, Insumos y Drogas';
  icon = 'faSyringe';
  sectionColor = '#1a5f7a';
  headerColor = '#1a5f7a';
  areaOrigen = 'UFREMID';

  wallpaperUrl = 'https://i.postimg.cc/fb9RCmxb/Gemini-Generated-Image-z0yo1iz0yo1iz0yo.png';
  
getHeaderStyle() {
  return {
    background: `linear-gradient(135deg, ${this.sectionColor}CC, ${this.sectionColor}CC), url('${this.wallpaperUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // backgroundBlendMode: 'overlay'   // o 'soft-light'
  };
}

  faSyringe = faSyringe;
  faHeart = faHeart;
  faDesktop = faDesktop;
  faLeaf = faLeaf;
  faFilePdf = faFilePdf;

  features = [
    {
      icon: faSyringe,
      title: 'Calidad en Servicios',
      description: 'Regulación y supervisión de la calidad en prestaciones de salud'
    },
    {
      icon: faDesktop,
      title: 'Tecnología Médica',
      description: 'Evaluación y control de equipos biomédicos y tecnologías sanitarias'
    },
    {
      icon: faFilePdf,
      title: 'Innovación',
      description: 'Fomento de la innovación tecnológica en el sector salud'
    }
  ];

    getIconForSection() {
 
      return this.faSyringe;
  }
}

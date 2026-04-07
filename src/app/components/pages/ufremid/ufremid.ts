import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar';
import {Footer} from '../../layout/footer/footer';
@Component({
  selector: 'app-ufremid',
  standalone: true,
  imports: [CommonModule, MenuBarComponent, Footer],
  templateUrl: './ufremid.html',
  styleUrl: './ufremid.scss',
})
export class Ufremid {
  title = 'UFREMID';
  description = 'Unidad Funcional de Regulación de Medicamentos, Insumos y Drogas';
  icon = 'pi-heart';
  sectionColor = '#1a5f7a';
  headerColor = '#1a5f7a';

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

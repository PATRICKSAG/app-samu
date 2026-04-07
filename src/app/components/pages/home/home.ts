import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenuBarComponent } from '../../layout/menu-bar/menu-bar';
import {Footer} from '../../layout/footer/footer';

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
  imports: [CommonModule, RouterModule, CardModule, ButtonModule, MenuBarComponent, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  sections: Section[] = [
    {
      id: 'ufremid',
      title: 'UFREMID',
      subtitle: 'Unidad Funcional de Regulación de Medicamentos, Insumos y Drogas',
      icon: 'pi-heart',
      description: 'Regulación y control de medicamentos, productos farmacéuticos, insumos médicos y sustancias controladas.',
      color: '#1a5f7a',
      textColor: '#ffffff',
      route: '/ufremid'
    },
    {
      id: 'ufresbit',
      title: 'UFRESBIT',
      subtitle: 'Unidad Funcional de Regulación en Servicios y Tecnología',
      icon: 'pi-desktop',
      description: 'Regulación de servicios de salud, tecnologías médicas, equipos biomédicos e innovación tecnológica.',
      color: '#2c8c6e',
      textColor: '#ffffff',
      route: '/ufresbit'
    },
    {
      id: 'ufresa',
      title: 'UFRESA',
      subtitle: 'Unidad Funcional de Regulación Salud Ambiental',
      icon: 'pi-verified',
      description: 'Regulación de factores ambientales que afectan la salud, saneamiento básico y gestión de riesgos.',
      color: '#e8a735',
      textColor: '#ffffff',
      route: '/ufresa'
    },
    {
      id: 'normativa',
      title: 'Normativa',
      subtitle: 'Marco Legal y Documentos Normativos',
      icon: 'pi-file-pdf',
      description: 'Acceso a leyes, decretos, resoluciones y documentos técnicos del sector salud.',
      color: '#c94f4f',
      textColor: '#ffffff',
      route: '/normativa'
    }
  ];
}

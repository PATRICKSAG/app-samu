import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBarComponent implements OnInit {
  @Input() sectionColor: string = '#1a5f7a';

  items: MenuItem[] = [];
  currentRoute: string = '';
  currentYear = new Date().getFullYear();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        this.updateMenuColor();
      }
    });
  }

  ngOnInit() {
    this.initializeMenuItems();
  }

  initializeMenuItems() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Unidades Técnicas',
        icon: 'pi pi-building',
        items: [
          {
            label: 'UFREMID',
            sublabel: 'Medicamentos, Insumos y Drogas',
            icon: 'pi pi-heart',
            routerLink: '/ufremid'
          },
          {
            label: 'UFRESBIT',
            sublabel: 'Servicios y Tecnología',
            icon: 'pi pi-desktop',
            routerLink: '/ufresbit'
          },
          {
            label: 'UFRESA',
            sublabel: 'Salud Ambiental',
            icon: 'pi pi-verified',
            routerLink: '/ufresa'
          }
        ]
      },
      {
        label: 'Normativa',
        icon: 'pi pi-file-pdf',
        routerLink: '/normativa'
      }
    ];
  }

  updateMenuColor() {
    if (this.currentRoute.includes('/ufresbit')) {
      this.sectionColor = '#2c8c6e';
    } else if (this.currentRoute.includes('/ufresa')) {
      this.sectionColor = '#e8a735';
    } else if (this.currentRoute.includes('/normativa')) {
      this.sectionColor = '#c94f4f';
    } else if (this.currentRoute.includes('/ufremid')) {
      this.sectionColor = '#1a5f7a';
    } else {
      this.sectionColor = '#1a5f7a';
    }
  }

  getMenuStyle() {
    return {
      'background': `linear-gradient(135deg, ${this.sectionColor} 0%, ${this.adjustColor(this.sectionColor, -20)} 100%)`
    };
  }

  adjustColor(color: string, percent: number): string {
    // Función simple para oscurecer/clarificar colores
    // En producción, considera usar una librería como 'color'
    return color;
  }
}

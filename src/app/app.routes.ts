import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Ufremid } from './components/pages/ufremid/ufremid';
import { Ufresbit } from './components/pages/ufresbit/ufresbit';
import { Ufresa } from './components/pages/ufresa/ufresa';
import { Normativa } from './components/pages/normativa/normativa';

export const routes: Routes = [
  { 
    path: '', 
    component: Home,
    data: { animation: 'home' }
  },
  { 
    path: 'ufremid', 
    component: Ufremid,
    data: { animation: 'ufremid' },
    title: 'UFREMID - Regulación de Medicamentos'
  },
  { 
    path: 'ufresbit', 
    component: Ufresbit,
    data: { animation: 'ufresbit' },
    title: 'UFRESBIT - Servicios y Tecnología'
  },
  { 
    path: 'ufresa', 
    component: Ufresa,
    data: { animation: 'ufresa' },
    title: 'UFRESA - Salud Ambiental'
  },
  { 
    path: 'normativa', 
    component: Normativa,
    data: { animation: 'normativa' },
    title: 'Normativa Sectorial'
  },
  { path: '**', redirectTo: '' }
];

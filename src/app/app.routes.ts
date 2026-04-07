import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { Ufremid } from './components/pages/ufremid/ufremid';
import { Ufresbit } from './components/pages/ufresbit/ufresbit';
import { Ufresa } from './components/pages/ufresa/ufresa';
import { Normativa } from './components/pages/normativa/normativa';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'ufremid', component: Ufremid, title: 'UFREMID - Regulación de Medicamentos' },
  { path: 'ufresbit', component: Ufresbit, title: 'UFRESBIT - Servicios y Tecnología' },
  { path: 'ufresa', component: Ufresa, title: 'UFRESA - Salud Ambiental' },
  { path: 'normativa', component: Normativa, title: 'Normativa Sectorial' },
  { path: '**', redirectTo: '' }
];

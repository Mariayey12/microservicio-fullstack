

import { Routes } from '@angular/router';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';

export const routes: Routes = [
  // Ruta principal que lleva al componente de lista de usuarios
  { path: '', component: UsuariosListComponent },

  // Ruta comodín para redirigir cualquier ruta no encontrada
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

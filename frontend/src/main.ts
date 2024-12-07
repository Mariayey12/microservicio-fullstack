

import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { UsuariosService } from './app/usuarios.service';

const production = true; // Define si estás en producción o desarrollo
//provideHttpClient(), // Proveedor para HttpClient
if (production) {
  enableProdMode(); // Desactiva las verificaciones de desarrollo
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),//es una función en Angular utilizada para configurar y proporcionar el cliente HTTP necesario para realizar solicitudes HTTP dentro de la aplicación
    provideRouter([]), // Aquí puedes añadir rutas si es necesario
    UsuariosService // Proveedor de servicios globale
  ]
}).catch(err => console.error(err));



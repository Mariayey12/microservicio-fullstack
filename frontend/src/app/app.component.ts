//Maneja el servicio
import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service'; // Importa el servicio creado
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component'; // Importa el componente de lista de usuarios

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Marca este componente como standalone
  imports: [
    UsuariosListComponent, // Asegúrate de incluir el componente de la lista de usuarios
  ]
})
export class AppComponent {
  title = ' Bienvenido a frontend ';
  usuarios: any[] = []; // Variable para almacenar los usuarios

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data; // Asigna los datos obtenidos a la variable usuarios
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngFor y *ngIf

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css'],
  standalone: true, // Marca este componente como standalone
  imports: [
    CommonModule, // Asegúrate de importar CommonModule
  ]
})
export class UsuariosListComponent implements OnInit {
  @Input() usuarios: any[] = []; // Recibe el arreglo de usuarios desde el componente padre

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías realizar alguna acción inicial si es necesario
  }
}



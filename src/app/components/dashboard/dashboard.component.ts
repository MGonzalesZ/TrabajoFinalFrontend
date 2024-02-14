import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTableModule } from '@angular/material/table';

export interface Estudiante {
  nombre: string;
  apellido: string;
  edad: number;
  carrera: string;
}

const ESTUDIANTES: Estudiante[] = [
  { nombre: 'Paola', apellido: 'Lopez', edad: 23, carrera: 'Ing. de Sistemas' },
  { nombre: 'Paola', apellido: 'Lopez', edad: 23, carrera: 'Ing. de Sistemas' },
  { nombre: 'Paola', apellido: 'Lopez', edad: 23, carrera: 'Ing. de Sistemas' },
  { nombre: 'Paola', apellido: 'Lopez', edad: 23, carrera: 'Ing. de Sistemas' },
  { nombre: 'Paola', apellido: 'Lopez', edad: 23, carrera: 'Ing. de Sistemas' },
  { nombre: 'Paola', apellido: 'Lopez', edad: 23, carrera: 'Ing. de Sistemas' },
  { nombre: 'Paola', apellido: 'Lopez', edad: 23, carrera: 'Ing. de Sistemas' },
];

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  nombres_columnas: string[] = ['nombre', 'apellido', 'edad', 'carrera'];

  // HACER GET A ESTUDIANTES
  lista_estudiantes = ESTUDIANTES;
}

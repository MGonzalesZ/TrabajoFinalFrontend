import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RestApiService } from '../../../services/rest-api.service';

@Component({
  selector: 'app-nuevo-usuario',
  standalone: true,
  imports: [
    NavbarComponent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css',
})
export class NuevoUsuarioComponent {
  // HACER UN POST
  constructor(private servicio_rest: RestApiService) {}

  formNuevoEst = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    edad: new FormControl(0, [
      Validators.required,
      Validators.min(5),
      Validators.max(99),
    ]),
    carrera: new FormControl('', Validators.required),
  });

  validarYGuardarEst(): void {
    this.servicio_rest
      .guardarEstudiante({
        nombre: this.formNuevoEst.value.nombre,
        apellido: this.formNuevoEst.value.apellido,
        edad: this.formNuevoEst.value.edad,
        carrera: this.formNuevoEst.value.carrera,
      })
      .subscribe((datos) => {
        console.log('El estudiante se registro con exito');
        console.log(datos);
      });
  }
}

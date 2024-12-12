import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  imports: [],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css',
})
export class Ejercicio3Component {
  //  Agregar un objeto con 4 propiedades en ts.
  miObjeto = {
    nombre: 'Adriana',
    edad: 35,
    profesion: 'Estudiante de Programación',
    ciudad: 'Buenos Aires',
  };
}

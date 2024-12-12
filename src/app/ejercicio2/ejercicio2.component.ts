import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  imports: [NgIf],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css',
})
export class Ejercicio2Component {
  // Ejercicio 2
  // En ts, agregar 2 variables strings que contengan mensajes y una variable booleana en false.
  bienvenida: string = 'Hola, bienvenida';
  mensaje: string = 'Este es mi primer mensaje en Angular';
  esVisible: boolean = true;
}

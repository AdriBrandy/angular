import { Component } from '@angular/core';
import { Ejercicio2Component } from '../ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from '../ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from '../ejercicio4/ejercicio4.component';
import { Ejercicio6Component } from '../ejercicio6/ejercicio6.component';

@Component({
  selector: 'app-ejercicios',
  imports: [Ejercicio2Component,Ejercicio3Component,Ejercicio4Component,Ejercicio6Component],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {

}

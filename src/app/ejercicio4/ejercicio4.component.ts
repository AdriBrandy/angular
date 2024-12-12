import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ejercicio4',
  imports: [NgFor],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css',
})
export class Ejercicio4Component {
  // Agregar un array con 4 objetos en ts.
  listaDeObjetos:Personas[]= [
    { apellido:"Brandan", nombre: 'Adriana', edad: 34, profesion: 'Estudiante de Programación' },
    { apellido:"Ruiz", nombre: 'Carlos', edad: 28, profesion: 'Diseñador UX' },
    { apellido:"Vai", nombre: 'María', edad: 40, profesion: 'Ingeniera en Informática' },
    { apellido:"Pérez", nombre: 'Juan', edad: 25, profesion: 'Desarrollador Full-stack' },
  ];
}

interface Personas {
  apellido:string,
  nombre:string,
  edad: number,
  profesion:string
}
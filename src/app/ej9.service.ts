import { Injectable } from '@angular/core';

interface Personas {
  apellido:string,
  nombre:string,
  edad: number,
  profesion:string
}
@Injectable({
  providedIn: 'root'
})
export class Ej9Service {
  listaDeObjetos:Personas[]= [
    { apellido:"Brandan", nombre: 'Adriana', edad: 34, profesion: 'Estudiante de Programación' },
    { apellido:"Ruiz", nombre: 'Carlos', edad: 28, profesion: 'Diseñador UX' },
    { apellido:"Vai", nombre: 'María', edad: 40, profesion: 'Ingeniera en Informática' },
    { apellido:"Pérez", nombre: 'Juan', edad: 25, profesion: 'Desarrollador Full-stack' },
  ];
  constructor() { }
  getPeople(){
    return this.listaDeObjetos;
  }
}
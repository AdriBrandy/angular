import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Ej9Service } from '../ej9.service';

interface Personas {
  apellido:string,
  nombre:string,
  edad: number,
  profesion:string
}
@Component({
  selector: 'app-ejercicio4',
  imports: [NgFor],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css',
})
export class Ejercicio4Component {
  // Agregar un array con 4 objetos en ts.
  listaDeObjetos:Personas[]=[];
  constructor(private ej9Service:Ej9Service){}
  
  ngOnInit():void{
    this.listaDeObjetos=this.ej9Service.getPeople();
  }

}


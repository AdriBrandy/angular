import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  imports: [NgFor],
  templateUrl: './ejercicio5.component.html',
  styleUrl: './ejercicio5.component.css'
})
export class Ejercicio5Component {
  menu:nav[]=[
    {url:"#",name:"Inicio"},
    {url:"https://neoattack.com/neowiki/front-end/",name:"Front-end"},
    {url:"https://neoattack.com/neowiki/back-end/",name:"Back-end"},
    {url:"#",name:"Sobre Nosotros"},
    {url:"#",name:"Contacto"},
    {url:"https://www.w3schools.com/html/html_exercises.asp",name:"Práctica"}

  ]
}

interface nav{
  url:string,
  name:string
}
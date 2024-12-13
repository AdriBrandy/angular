import { Component } from '@angular/core';

import { Ejercicio5Component } from './ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './ejercicio6/ejercicio6.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Ejercicio5Component,RouterOutlet,Ejercicio6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}

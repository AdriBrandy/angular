import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';

export const routes: Routes = [
  { path: 'ejercicios', component: EjerciciosComponent },
  { path: 'pelis', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
  { path: '', redirectTo: '/ejercicios', pathMatch: 'full' }, // Redirección por defecto
  { path: '**', redirectTo: '/ejercicios' } // Manejo de rutas inexistentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

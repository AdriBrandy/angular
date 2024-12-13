import { Component } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { SeriesComponent } from '../series/series.component';

@Component({
  selector: 'app-movies',
  imports: [MovieListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}

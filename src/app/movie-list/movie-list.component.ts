import { NgFor, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { MovieItemComponent } from "../movie-item/movie-item.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { MovieService } from '../movie.service';
interface Peliculas{
  title:string;
  year:number;
  description:string;
  image?:string;
}

@Component({
  selector: 'app-movie-list',
  imports: [NgFor, NgIf, MovieItemComponent, SearchBarComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies:Peliculas[]=[];

  selectedMovie: string | null = null;
  constructor(private movieService: MovieService) {} 

  ngOnInit(): void {
    this.movies = this.movieService.getMovies(); 
  }
  onMovieSelected(movieTitle: string) {
    this.selectedMovie = movieTitle;
  }
}

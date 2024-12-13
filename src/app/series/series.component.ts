import { Component,OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-series',
  imports: [NgIf,NgFor],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  episodes: any[] = [];
  title = 'From'; // Título de la serie (puedes cambiarlo dinámicamente)
  season = 1;    // Número de temporada (puedes cambiarlo dinámicamente)

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getEpisodes(this.title, this.season).subscribe(data => {
      this.episodes = data.Episodes;
    });
  }
}

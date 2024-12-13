import { Component,OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-series',
  imports: [NgIf,NgFor],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent implements OnInit {
  episodes: any[] = [];
  title:string = 'Friends'; 
  season:string = '6';    

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getEpisodes(this.title, this.season).subscribe(data => {
      this.episodes = data.Episodes;
    });
  }
}

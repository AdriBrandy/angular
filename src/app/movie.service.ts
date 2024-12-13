import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies:Peliculas[] = [
    { title: 'El Padrino', year: 1972, description: 'Historia de una familia de la mafia.', image:"https://http2.mlstatic.com/D_NQ_NP_849311-MLA52604231932_112022-O.webp" },
    { title: 'El Caballero Oscuro', year: 2008, description: 'Batman enfrenta al Joker.', image:"https://es.web.img2.acsta.net/medias/nmedia/18/66/74/01/20350623.jpg" },
    { title: 'Pulp Fiction', year: 1994, description: 'Historias entrelazadas en Los Ángeles.', image:"https://i5.walmartimages.com/asr/ce193b8f-4979-4dd4-89fb-cb5bda97b87b.47bd5508be83004cfd0b4ae1123a208e.jpeg" },
    { title: 'El Señor de los Anillos', year: 2001, description: 'La lucha por destruir un anillo maligno.', image:"https://http2.mlstatic.com/D_NQ_NP_768365-MLA52130313417_102022-O.webp" },
    { title: 'Forrest Gump', year: 1994, description: 'La vida de un hombre con un corazón puro.', image:"https://http2.mlstatic.com/D_NQ_NP_864754-MLA77070770451_062024-O.webp" },
    { title: 'Matrix', year: 1999, description: 'Un hacker descubre la verdad sobre su mundo.', image:"https://http2.mlstatic.com/D_NQ_NP_747069-MLA52266915152_112022-O.webp" },
    { title: 'Gladiador', year: 2000, description: 'Un general romano busca venganza.', image:"https://i.pinimg.com/736x/c6/54/b8/c654b82184aba4dbd2b28a0f1d429451.jpg" },
    { title: 'Titanic', year: 1997, description: 'Una historia de amor en el fatídico barco.', image:"https://images-cdn.ubuy.co.id/634e3a4f44fbec77e05701ef-premiumprints-titanic-movie-poster.jpg" },
    { title: 'El Rey León', year: 1994, description: 'La vida de Simba, un león destinado a ser rey.', image:"https://es.web.img3.acsta.net/r_1280_720/medias/nmedia/18/68/20/31/19785394.jpg?coixp=47&coiyp=41" },
    { title: 'Avatar', year: 2009, description: 'Exploración de un planeta alienígena.', image:"https://m.media-amazon.com/images/I/61l4F+4vu8L.jpg" }
  ];

  getMovies() {
    return this.movies;
  }
  private apiUrl = 'https://www.omdbapi.com/?apikey=2ff6c6e4';

  constructor(private http: HttpClient) {}

  getEpisodes(title: string, season: number): Observable<{ Episodes: [] }> {
    return  this.http.get<{Episodes: []}>('https://www.omdbapi.com/?apikey=2ff6c6e4&t=From&Season=1')
  }
}

interface Peliculas{
  title:string;
  year:number;
  description:string;
  image?:string;
}
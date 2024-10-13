import { Component, inject } from '@angular/core';
import { MovieService } from '../movie.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [JsonPipe, AsyncPipe, NgFor, NgIf],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  correo = 'julio.ledesma@udgvirtual.udg.mx';
  private readonly moviesSvc = inject(MovieService)
  movies$ = this.moviesSvc.getAllMovies();
}

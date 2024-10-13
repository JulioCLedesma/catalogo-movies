import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly _http = inject (HttpClient);

  getAllMovies(): Observable<any> {
    return this._http.get('http://127.0.0.1:8000/api/movies');
  }
    
  constructor() { }
}

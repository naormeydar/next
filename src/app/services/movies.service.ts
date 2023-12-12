import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../models/movie.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<IMovie[]> {
    return this.http.get<any[]>('http://localhost:3000/movies').pipe(
      map((responseMovies: any[]) => {
        return responseMovies.map(responseMovie => ({
          id: responseMovie.id,
          title: responseMovie.title,
          image: responseMovie.image,
          synopsis: responseMovie.synopsis,
          rating: responseMovie.rating,
          released: responseMovie.released,
          runtime: responseMovie.runtime
        }));
      })
    );
  }
}

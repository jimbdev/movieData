import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesourceService {

  private _movies: BehaviorSubject<Movie[]>;

  private dataStore: {
    movies: Movie[]
  }

  constructor(private http: HttpClient) {
    let mov1 = new Movie('movie1','R');
    let mov2 = new Movie('movie2', 'PG')

    this.dataStore = { movies: [mov1, mov2]};
    this._movies = new BehaviorSubject<Movie[]>([]);
   }

   get movies(): Observable<Movie[]> {
     return this._movies.asObservable();
   }




}

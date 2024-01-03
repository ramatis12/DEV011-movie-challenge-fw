import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APImovieService {

  private urlApi= 'https://api.themoviedb.org/3/movie/changes?page=1';
  private apiKey= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmQ3OTg3ODcxYWZjOGY0ZjBhNmNhODhmYmMwMWYxMCIsInN1YiI6IjY1N2E3ZjBkMzVhNjFlMDEzYWMyYmM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHZyKVfaggDV8RJxFFhF5dEJExFddVoqq8ZXQXWXrAc';

  constructor( private http: HttpClient) { } 

  public getData() : Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
    });
    //const keyMovie = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);
    return this.http.get<any>(`${this.urlApi}/https://api.themoviedb.org/3/movie/changes?page=1`,  {headers});
  }
  
}

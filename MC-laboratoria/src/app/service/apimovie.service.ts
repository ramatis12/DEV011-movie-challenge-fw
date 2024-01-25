import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APImovieService {

  private urlApi= 'https://api.themoviedb.org/3/discover/movie';
  private urlGeneros = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
  private apiKeyG = 'dfd7987871afc8f4f0a6ca88fbc01f10';
  private apiKey= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmQ3OTg3ODcxYWZjOGY0ZjBhNmNhODhmYmMwMWYxMCIsInN1YiI6IjY1N2E3ZjBkMzVhNjFlMDEzYWMyYmM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fHZyKVfaggDV8RJxFFhF5dEJExFddVoqq8ZXQXWXrAc';

  private genreId: number = 0;

  setGeneroSeleccionado(genero: number): void {
    this.genreId = genero;
  }

  getGeneroSeleccionado(): number {
    return this.genreId;
  }


  constructor( private http: HttpClient) { } 

    public getData(page:number) : Observable<any> { 
      const genreId = this.getGeneroSeleccionado();
      //console.log(genreId);
    return this.http.get<any>(`${this.urlApi}?api_key=${this.apiKeyG}&page=${page}&genreId=${genreId}`);
  }
  
}

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


  // discobery https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc 
  // filtro https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
  // input https://api.themoviedb.org/3/movie/movie_id?language=en-US
  // https://api.themoviedb.org/3/genre/movie/list?language=en

  constructor( private http: HttpClient) { } 

  public getData() : Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
    });
    return this.http.get<any>(this.urlApi, { headers: headers });
  }
  
  public getGenery() : Observable<any> {
    const headersG = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKeyG}`,
    });
    return this.http.get<any>(this.urlGeneros, { headers: headersG });
  } 

}

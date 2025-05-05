import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from './music';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  apiUrl = "http://localhost:3000/music";

  constructor(private http: HttpClient) { }

  getSong() : Observable<Song[]>{
    return this.http.get<Song[]>(this.apiUrl);
  }
}

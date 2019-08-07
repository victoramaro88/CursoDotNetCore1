import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventoService {
  baseUrl = 'http://localhost:5000/api/evento';

  constructor(private http: HttpClient) { }

  getAllEvento() {
    return this.http.get(this.baseUrl);
  }
}

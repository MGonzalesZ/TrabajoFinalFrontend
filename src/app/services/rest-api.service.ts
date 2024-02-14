import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  private apiUrl = 'http://192.168.0.13:3000/estudiantes'; // el endpoint

  constructor(private http: HttpClient) {}

  getEstudiantes(): Observable<any> {
    console.log('Te devuelvo estudiantes');
    return this.http.get(this.apiUrl);
  }

  guardarEstudiante(nuevo_estudiante: any): Observable<any> {
    return this.http.post(this.apiUrl, nuevo_estudiante);
  }

  // editarEstudiante(id: string, datos_nuevos: any): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/${id}`, datos_nuevos);
  // }

  // eliminarEstudiante(id: string): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/${id}`);
  // }

  // getEstudiante(id: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`);
  // }
}

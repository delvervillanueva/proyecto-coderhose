import { Injectable } from '@angular/core';
import { ListaAlumnosModel } from '../interfaces/alumnos.model';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) {

  }
  public listaAlumnos: ListaAlumnosModel[] = [];

  private readonly API = environment.api;
  
  getAlumnos(): Observable<ListaAlumnosModel[]> {
    return this.http.get<ListaAlumnosModel[]>(this.API);
  }

  agregarAlumno( nombre : ListaAlumnosModel ) {
    this.listaAlumnos.unshift( nombre );
  }

  eliminarAlumno(id : any): Observable<void> {
   console.log(id)
   return this.http.delete<void>(`${this.API}/${id}`);
  }

}
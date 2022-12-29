import { Injectable } from '@angular/core';
import { ListaAlumnosModel } from '../interfaces/alumnos.model';




@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  listaAlumnos: ListaAlumnosModel[] = [

    { posicion: 1, nombre: "Juan López", grado: "cuarto", edad: 15, sexo: "Masculino", promedio: 11 },
    { posicion: 2, nombre: "Rita Vannesa", grado: "cuarto", edad: 16,sexo: "Femenino", promedio: 9 },
    { posicion: 3, nombre: "Raúl Santiago", grado: "cuarto", edad: 14,sexo: "Masculino",promedio: 14 },
    { posicion: 4, nombre: "Jorge Hermes", grado: "cuarto", edad: 15,sexo: "Masculino",promedio: 7 },
    { posicion: 5, nombre: "Fredesvinda Lopez", grado: "cuarto", edad: 15,sexo: "Femenino", promedio:18 },
    { posicion: 6, nombre: "Lester Vera", grado: "cuarto", edad: 16,sexo: "Masculino",promedio: 13 },
    { posicion: 7, nombre: "Fernando César", grado: "cuarto", edad: 17,sexo: "Masculino", promedio: 17 },
    { posicion: 8, nombre: "Ivan José", grado: "cuarto", edad: 14,sexo: "Masculino",promedio: 15 },
    { posicion: 9, nombre: "Juan Marco", grado: "cuarto", edad: 15,sexo: "Masculino",promedio: 10 },
    { posicion: 10, nombre: "Bruno Santigo", grado: "cuarto", edad: 15,sexo: "Masculino",promedio: 12 },
    { posicion: 11, nombre: "Lourdes Espinoza", grado: "cuarto", edad: 14,sexo: "Femenino", promedio: 18 },
    { posicion: 12, nombre: "Carmen Olivares", grado: "cuarto", edad: 15,sexo: "Femenino", promedio: 14 },
    { posicion: 13, nombre: "Emer Sandoval", grado: "cuarto", edad: 14,sexo: "Masculino",promedio: 15 },
  
    
  ];
  
  getAlumnos() {
    return this.listaAlumnos.slice();
  }


  eliminarAlumno(index : number) {
    this.listaAlumnos.splice(index,1);
  }

}

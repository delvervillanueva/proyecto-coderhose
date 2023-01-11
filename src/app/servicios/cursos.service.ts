import { Injectable } from '@angular/core';
import { ListaCursosModel } from '../interfaces/cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {


  listaCursos: ListaCursosModel[] = [

    { nombres: "Juan López", grado: "cuarto", edad: 15, sexo: "Masculino", promedio: 11 },
    { nombres: "Rita Vannesa", grado: "cuarto", edad: 16,sexo: "Femenino", promedio: 9 },
    { nombres: "Raúl Santiago", grado: "cuarto", edad: 14,sexo: "Masculino",promedio: 14 },
    { nombres: "Jorge Hermes", grado: "cuarto", edad: 15,sexo: "Masculino",promedio: 7 },
    { nombres: "Fredesvinda Lopez", grado: "cuarto", edad: 15,sexo: "Femenino", promedio:18 },
    { nombres: "Lester Vera", grado: "cuarto", edad: 16,sexo: "Masculino",promedio: 13 },
    { nombres: "Fernando César", grado: "cuarto", edad: 17,sexo: "Masculino", promedio: 17 },
    { nombres: "Ivan José", grado: "cuarto", edad: 14,sexo: "Masculino",promedio: 15 },
  ];
  
  getCursos() {
    return this.listaCursos.slice();
  }

  agregarCurso( nombre : ListaCursosModel ) {
    this.listaCursos.unshift( nombre );
  }

  eliminarCurso(index : number) {
    this.listaCursos.splice(index,1);
  }

}

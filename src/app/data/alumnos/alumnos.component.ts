import { Component, OnInit } from '@angular/core';
import { ListaAlumnosModel } from '../../interfaces/alumnos.model';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  listAlumnos: ListaAlumnosModel[] = []
  displayedColumns: string[] = ['nombres', 'grado', 'edad', 'sexo', 'promedio', 'acciones'];
  dataSource : MatTableDataSource<any>;

  constructor( private _alumnosService: AlumnosService, private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.listAlumnos = this._alumnosService.getAlumnos();
    this.dataSource = new MatTableDataSource(this.listAlumnos);
  }

  addNewItem(res:any) {
    alert(res);
  }

  eliminarAlumno(index: number) {
    console.log(index);

    this._alumnosService.eliminarAlumno(index);
    this.cargarAlumnos();

    this._snackBar.open('El Alumno fue eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }
  

}

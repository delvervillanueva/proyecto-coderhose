import { Component, OnInit } from '@angular/core';
import { ListaCursosModel } from '../../interfaces/cursos.model';
import { MatTableDataSource } from '@angular/material/table';
import { CursosService } from 'src/app/servicios/cursos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  listCursos: ListaCursosModel[] = []
  displayedColumns: string[] = ['nombres', 'grado', 'edad', 'sexo', 'promedio', 'acciones'];
  dataSource : MatTableDataSource<any>;
  

  constructor(private _cursosService: CursosService, private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos() {
    this.listCursos = this._cursosService.getCursos();
    this.dataSource = new MatTableDataSource(this.listCursos);
  }

  addNewItem(res:any) {
    alert(res);
  }


  eliminarCurso(index: number) {
    console.log(index);

    this._cursosService.eliminarCurso(index);
    this.cargarCursos();

    this._snackBar.open('El Curso fue eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }
  

}

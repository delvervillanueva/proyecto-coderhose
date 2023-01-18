import { Component, OnInit } from '@angular/core';
import { ListaAlumnosModel } from '../../interfaces/alumnos.model';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  listAlumnos: ListaAlumnosModel[] = []
  displayedColumns: string[] = ['nombres', 'grado', 'edad', 'sexo', 'promedio', 'acciones'];
  dataSource : MatTableDataSource<any>;

  public alumnos$: Observable<ListaAlumnosModel[]>;

  constructor( private _alumnosService: AlumnosService, private _snackBar : MatSnackBar) {
    

   }


  ngOnInit(): void {
    /* this.alumnos$ = this._alumnosService.listaAlumnos$
    this.dataSource = new MatTableDataSource(this.alumnos$); */
    this.cargarAlumnos();
  //  console.log(this.alumnos$, 'oooooooo');
   
  }

  cargarAlumnos() {
    this._alumnosService.getAlumnos().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    })
    /* this._alumnosService.getAlumnos().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
    }) */
  /*    this._alumnosService.getAlumnos().subscribe((resp=> {
      console.log(resp);
      this.alumnos$ = [...resp];
      this.dataSource = new MatTableDataSource(this.listAlumnos);
    })) */
   /* this._alumnosService.getAlumnos().subscribe((resp=> {
      console.log(resp);
      this.listAlumnos = [...resp];
      this.dataSource = new MatTableDataSource(this.listAlumnos);
    })); */
  }

  addNewItem(res:any) {
    alert(res);
  }

  eliminarAlumno(id: any): void {
   // this._alumnosService.eliminarAlumno(index);
   if(confirm('Estás de Eliminar a Alumno')) {
      this._alumnosService.eliminarAlumno(id).subscribe(()=> {
      const tempArr = this.listAlumnos.filter(alumno => alumno.id !== id);
      this.listAlumnos = [...tempArr];
    });
  }
    this.cargarAlumnos();

    this._snackBar.open('El Alumno fue eliminado con éxito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }
  

}
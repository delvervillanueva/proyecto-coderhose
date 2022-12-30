import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { ListaAlumnosModel } from '../../interfaces/alumnos.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.css']
})
export class CrearAlumnosComponent implements OnInit {

  sexo: any[] = ['Masculino', 'Femenino'];

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  agregarAlumno(value: string) {
    this.newItemEvent.emit(value);
  }

  crearAlumno: FormGroup;

  constructor( private fb: FormBuilder,
               private router: Router, 
               private  alumnosService: AlumnosService,
               private _snackBar : MatSnackBar) { 

    this.crearFormulario();
  }

  crearFormulario() {
    this.crearAlumno = this.fb.group({
       nombres: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
       grado: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
       edad: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
       sexo: ['', [Validators.required ]],
       promedio: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
     });
   }

  ngOnInit(): void {
  }


  get nombreNoValido() {
    return this.crearAlumno.get('nombres')?.invalid && this.crearAlumno.get('nombres')?.touched
  }

  get gradoNoValido() {
    return this.crearAlumno.get('grado')?.invalid && this.crearAlumno.get('grado')?.touched
  }

  get edadNoValido() {
    return this.crearAlumno.get('edad')?.invalid && this.crearAlumno.get('edad')?.touched
  }

  get sexoNoValido() {
    return this.crearAlumno.get('sexo')?.invalid && this.crearAlumno.get('sexo')?.touched
  }

  get promedioNoValido() {
    return this.crearAlumno.get('promedio')?.invalid && this.crearAlumno.get('promedio')?.touched
  }

  agregarEditarCliente(){

  }

  goBack() {
    this.router.navigate(['/list-alumnos']);
    }

  editarAlumno()  {
  }

  guardar() {
    const alumno : ListaAlumnosModel = {
      nombres: this.crearAlumno.value.nombres,
      grado: this.crearAlumno.value.grado,
      edad: this.crearAlumno.value.edad,
      sexo: this.crearAlumno.value.sexo,
      promedio:  this.crearAlumno.value.promedio,
    }

    this.alumnosService.agregarAlumno(alumno);
    this.router.navigate(['/list-alumnos']);

    this._snackBar.open('El Alumno fue agregado con éxito', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }


}

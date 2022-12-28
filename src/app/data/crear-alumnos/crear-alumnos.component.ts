import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.css']
})
export class CrearAlumnosComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  agregarAlumno(value: string) {
    this.newItemEvent.emit(value);
  }

  crearAlumno: FormGroup;

  constructor(private fb: FormBuilder,  private router: Router,) { 
    this.crearFormulario();
  }

  crearFormulario() {
    this.crearAlumno = this.fb.group({
       nombres: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
       grado: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
       edad: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2)]],
       sexo: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
       promedio: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],

       numAlumnos: this.fb.array([])
 
     });
   }

  ngOnInit(): void {
  }

  get numAlumnos(){ 
    return this.crearAlumno.get('numAlumnos') as FormArray;
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
    console.log(this.crearAlumno);
    if( this.crearAlumno.invalid ) {

      return Object.values( this.crearAlumno.controls ).forEach( control => {
        control.markAsTouched();
      })
    }
    this.crearAlumno.reset();
  }





}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-alumnos',
  templateUrl: './crear-alumnos.component.html',
  styleUrls: ['./crear-alumnos.component.css']
})
export class CrearAlumnosComponent implements OnInit {

  crearAlumno: FormGroup;

  constructor(private fb: FormBuilder,  private router: Router,) { 
    this.crearAlumno = this.fb.group({
      alumno: ['', Validators.required],
      grado: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      promedio: ['', Validators.required],

    });
  }

  ngOnInit(): void {
  }

  agregarEditarCliente(){

  }

  goBack() {
    this.router.navigate(['/list-alumnos']);
    }

  editarAlumno()  {
    
  }


}

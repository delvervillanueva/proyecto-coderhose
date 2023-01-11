import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CrearAlumnosComponent } from './crear-alumnos/crear-alumnos.component';
import { CursosComponent } from './cursos/cursos.component';


const routes: Routes = [
  {
     path: '',
     children: [
      { path: 'list-alumnos', component: AlumnosComponent },
      { path: 'crear-alumnos', component: CrearAlumnosComponent },
      { path: 'cursos-alumnos', component: CursosComponent },
      { path: '**', redirectTo: 'list-alumnos' },
     ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }

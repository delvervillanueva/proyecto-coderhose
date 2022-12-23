import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlumnosComponent } from "./data/alumnos/alumnos.component";
import { CrearAlumnosComponent } from "./data/crear-alumnos/crear-alumnos.component";



const routes: Routes = [

     
    { path: '', redirectTo: 'list-alumnos', pathMatch: 'full' },
    { path: 'list-alumnos', component: AlumnosComponent },
    { path: 'crear-alumnos', component: CrearAlumnosComponent },
    { path: '**', redirectTo: 'list-alumnos', pathMatch: 'full' },

     
];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
  
  })
  
  export class AppRoutingModule { }
  
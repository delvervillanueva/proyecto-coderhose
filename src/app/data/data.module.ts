import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//import { AppComponent } from '../app.component';
//import { NavbarComponent } from '../layout/navbar/navbar.component';
//import { ToolbarComponent } from '../layout/toolbar/toolbar.component';
//import { MenuIzqComponent } from '../layout/menu-izq/menu-izq.component';

//Routing
import { DataRoutingModule } from './data-routing.module';

import { AlumnosComponent } from '../data/alumnos/alumnos.component';
import { CrearAlumnosComponent } from '../data/crear-alumnos/crear-alumnos.component';
import { CursosComponent } from '../data/cursos/cursos.component';


//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table'  
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import {MatIconModule} from '@angular/material/icon';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlumnosComponent,
    CrearAlumnosComponent,
    CursosComponent,

    //AppComponent,
   // NavbarComponent, 
   // ToolbarComponent,
   // MenuIzqComponent
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
   // BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DataModule { }

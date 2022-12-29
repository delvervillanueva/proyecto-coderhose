import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { MenuIzqComponent } from './layout/menu-izq/menu-izq.component';
import { AlumnosComponent } from './data/alumnos/alumnos.component';
import { CrearAlumnosComponent } from './data/crear-alumnos/crear-alumnos.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table'  
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { CursosComponent } from './data/cursos/cursos.component';

import {MatIconModule} from '@angular/material/icon';

//Rutas
import { AppRoutingModule } from '../app/app.routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    MenuIzqComponent,
    AlumnosComponent,
    CrearAlumnosComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataModule } from './data/data.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { MenuIzqComponent } from './layout/menu-izq/menu-izq.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';



import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { MatIconModule } from '@angular/material/icon';

//Rutas
import { AppRoutingModule } from '../app/app.routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    MenuIzqComponent,

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
    MatSnackBarModule,
    MatToolbarModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule,
    DataModule


  ],
  exports: [
    NavbarComponent,
    ToolbarComponent,
    MenuIzqComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

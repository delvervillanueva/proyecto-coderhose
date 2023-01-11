import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = 
    [
        {
            path: '',
            loadChildren: () => import('./data/data.module').then(m => m.DataModule)
        },
        {
            path: '**', redirectTo: 'list-alumnos' 
        },
    ];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
  
  })
  
  export class AppRoutingModule { }
  
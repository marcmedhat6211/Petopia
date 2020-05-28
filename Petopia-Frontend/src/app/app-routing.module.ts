import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from './components/single/single.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  {path: 'single',
  component: SingleComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }

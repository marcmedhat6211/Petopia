import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from './components/single/single.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
  path: 'home',
  component: HomeComponent
  },
  {path: 'single',
  component: SingleComponent} ,
  {path: 'calendar',
  component: CalendarComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }

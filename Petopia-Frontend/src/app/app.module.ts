import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SingleComponent } from './components/single/single.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule ,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { AuthentictionService } from './authentiction.service';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponeResetComponent } from './components/password/respone-reset/respone-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    SingleComponent,
    
    CalendarComponent,
    
    RegisterComponent,
    
    LoginComponent,
    
    NavbarComponent,
    
    FooterComponent,
    
    RequestResetComponent,
    
    ResponeResetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    
  ],
  providers: [AuthentictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Input } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../User';
import { Service } from '../../Service';
import { Router,ActivatedRoute } from '@angular/router';
import { AthenticationService } from 'src/app/services/athentication.service';
import { TokenService } from 'src/app/services/token.service';
import { reservationService } from 'src/app/reservationService';
import { NgForm } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})

export class ReservationComponent implements OnInit{

  body = {
      "email": atob(window.localStorage.getItem('email')),
      "password": atob(window.localStorage.getItem('password')),
    };
    
    constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router, private athentication:AthenticationService, private token :TokenService)
    {}
    
    service: Service;
    user: User;

    ngOnInit(): void 
    {
      var id = window.location.pathname.split("/").pop();
      var token = window.localStorage.getItem('token');
      console.log(`Bearer ${token}`);
      
      // me7tag an2el dh f service bara wa7do
      // http interceptor (bey3ady 3aleh kol el http requests el ana bab3atha)
      
      this.http.post<User>('http://localhost:8000/api/me', this.body,{
          headers : new HttpHeaders({
              'Accept' : 'application/json',
              'Authorization': `Bearer ${token}`,
            })
          }).subscribe(data => {
              this.user = data;
              console.log(data);
            });
            
            this.http.get<Service>('http://localhost:8000/api/services/'+id).subscribe(data => {
                console.log(data);
                this.service = data;
              });          
    }
        
    service_name = localStorage.getItem('service_name');
    user_name = localStorage.getItem('user_name');
    my_token = this.token.get();
            
            
    public form={
      service_name: this.service_name,
      client_name: this.user_name,
      date:null,
      pet_name:null,
    }

    public error= null ;
    onSubmit(){
      this.athentication.reservation(this.form).subscribe(
        (data)=>this.handleResponse(data),
        error=>this.handleError(error),
      )
      localStorage.setItem('pet_name', this.form.pet_name);
      localStorage.setItem('reservation_date', this.form.date);

      if(this.service_name == 'Boarding')
      {
        this.router.navigateByUrl('/boarding');
      }
      else
      {
        alert('Reservation made successfully');
        this.router.navigateByUrl('/home');
      }
    }

    handleError(error){
      this.error=error.error.message
    }

    handleResponse(data){
      this.token.handle(this.my_token)
      localStorage.setItem('reservation_id', data.reservation_id)
    }
}
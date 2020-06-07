import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../User';
import { Service } from '../../Service';
import {Router,ActivatedRoute} from '@angular/router';
import { AthenticationService } from 'src/app/services/athentication.service';
import { TokenService } from 'src/app/services/token.service';
import { reservationService } from 'src/app/reservationService';
import { NgForm } from '@angular/forms';

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

  user: User;
  service: Service;

  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router, private athentication:AthenticationService,private token :TokenService ){}
  ngOnInit(): void 
  {
      var id = window.location.pathname.split("/").pop();
      var service_name = window.location.pathname.split("/")[2].replace(/%20/g,' ');
      localStorage.setItem('service_name', service_name);
      var token = window.localStorage.getItem('token');
      console.log(`Bearer ${token}`);
      
      //me7tag an2el dh f service bara wa7do
      //http interceptor (bey3ady 3aleh kol el http requests el ana bab3atha)
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

    public form={
      service_name: localStorage.getItem('service_name'),
      client_name: localStorage.getItem('user_name'),
      date:null,
      pet_name:null, 
    }

    public error= null ;
    onSubmit(){
    console.log(this.form);
      this.athentication.reservation(this.form).subscribe(
        (data)=>this.handleResponse(data),
        error=>this.handleError(error)
      )
      // alert('Reservation made successfully');
    }

    handleError(error){
      this.error=error.error.message
    }

    handleResponse(data){
      this.token.handle(data.access_token)
      this.router.navigateByUrl('/home')
    }
}
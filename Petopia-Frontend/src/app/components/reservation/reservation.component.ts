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


export class ReservationComponent implements OnInit {


  body = {
    "email": atob(window.localStorage.getItem('email')),
    "password": atob(window.localStorage.getItem('password')),
  };
  

  user: User;
  service: Service;

  // document.getElemenyById('service_value')


  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router, private athentication:AthenticationService,private token :TokenService ){}
  ngOnInit(): void 
  {
    var id = window.location.pathname.split("/").pop();
    var token = window.localStorage.getItem('token');
    console.log(`Bearer ${token}`);
    
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
    service_name: null,
    client_name:null,
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
  }


  handleError(error){
    this.error=error.error.message
  }

  handleResponse(data){
    this.token.handle(data.access_token)
    this.router.navigateByUrl('/home')
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../User';
import { Service } from '../../Service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})

export class ReservationComponent implements OnInit {


  body = {
    "email": atob(window.localStorage.getItem('email')),
    "password": atob(window.localStorage.getItem('password'))
  };
  

  user: User;
  service: Service;

  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) { }
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
      console.log(data);
      this.user = data;
    });
    
    this.http.get<Service>('http://localhost:8000/api/services/'+id).subscribe(data => {
      console.log(data);
      this.service = data;    
    });  
  }
}

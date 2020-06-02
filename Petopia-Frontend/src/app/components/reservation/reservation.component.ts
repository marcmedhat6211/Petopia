import { Component, OnInit } from '@angular/core';
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

  user: User;
  service: Service;

  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void 
  {
    var id = this.route.params._value.id;
    var x  = +id ;
    console.log(x);

    
    this.http.get<User>('http://localhost:8000/api/auth').subscribe(data => {
      console.log(data);
      this.user = data;
    });
    
    this.http.get<Service>('http://localhost:8000/api/services/'+x).subscribe(data => {
      console.log(data);
      this.service = data;    
    });  
  }

}

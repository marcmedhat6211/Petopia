import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../../Service';
import {Router,ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  service: Service;
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router
     ) {}

  ngOnInit(): void 
  {   
    var id = this.route.params._value.id;
    var x  = +id ;
    console.log(x);

    this.http.get<Service>('http://localhost:8000/api/services/'+x).subscribe(data => {
      console.log(data);
      this.service = data;    
    });  
  }
   
}

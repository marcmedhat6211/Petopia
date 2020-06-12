import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../../Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  service: Service;

  constructor(private http: HttpClient) {}

  ngOnInit(): void 
  {
    this.http.get<Service>('http://localhost:8000/api/services').subscribe((data) => {
      this.service = data;
    });
  }
  
    // hack : scroll to top after rendering component
    ngAfterViewInit() {
      let top = document.getElementById('top');
      if(top !=null) {
        top.scrollIntoView();
        top=null
      }
  }
  
}

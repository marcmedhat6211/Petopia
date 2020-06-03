import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/Service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  service: Service;

  constructor(private http: HttpClient) { }

  ngOnInit(): void 
  {
    this.http.get<Service>('http://localhost:8000/api/services').subscribe(data => {
      // console.log(data);
      this.service = data;
    });
  }

}

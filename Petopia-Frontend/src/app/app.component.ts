import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthentictionService } from './authentiction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router,private route:ActivatedRoute ,public auth:AuthentictionService) {
  }
  
  title = 'Petopia-Frontend';
}

import { Component, OnInit } from '@angular/core';
import { AuthentictionService,TokenPayload } from 'src/app/authentiction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  credentials:TokenPayload={
 
    name:'',
    email:'',
    password:'',
   

  }
  constructor(private auth:AuthentictionService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    this.auth.register(this.credentials).subscribe(()=>{
      this.router.navigateByUrl('/')
    },
    err=>{
      console.error(err);
      
    })
  }

}

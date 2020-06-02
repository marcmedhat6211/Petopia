import { Component, OnInit } from '@angular/core';
import { AuthentictionService,TokenPayload } from 'src/app/authentiction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  credentials:TokenPayload={
    name:'',
    email:'',
    password:''
  }
  constructor(private auth:AuthentictionService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.auth.login(this.credentials).subscribe(()=>{
      this.router.navigateByUrl('/')
    },
    err=>{
      console.error(err);
      
    })
  }

}

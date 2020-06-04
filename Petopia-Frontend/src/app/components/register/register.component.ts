import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AthenticationService } from 'src/app/services/athentication.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit{
  
  constructor(private athentication:AthenticationService,private token :TokenService,private router:Router) { }

  ngOnInit(): void {
  }
  
  
  form={
    name:null,
    email:null,
    password:null,
    password_confirmation:null,
    phone_number:null,
    recommendation:null,
    address:null
  }
  public error=[]
  onSubmit(){
    console.log(this.form);
    
   this.athentication.register(this.form).subscribe(
     
      (data)=>this.handleResponse(data),
      error=>this.handleError(error)
    )
  }


  handleError(error){
    this.error=error.error.errors
  }

  handleResponse(data){
    this.token.handle(data.access_token)
    this.router.navigateByUrl('/pet')
  }
}

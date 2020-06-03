import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AthenticationService } from 'src/app/services/athentication.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  

  public form={
    email:null,
    password:null
  }
  public error=null
  constructor(private athentication:AthenticationService,private token:TokenService,private router:Router,private auth:AuthService ) { }
  
  onSubmit(){
    this.athentication.signin(this.form).subscribe(
     
      (data)=>this.handleResponse(data),
      error=>this.handleError(error)
      

    )
  }

  handleError(error){
    this.error=error.error.error
  }

  handleResponse(data){
    this.token.handle(data.access_token)
    this.auth.changeAuthStatus(true)
    this.router.navigateByUrl('/pet')
  }

  ngOnInit(): void {
    
    
  }

  
 
}

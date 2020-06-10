import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AthenticationService } from 'src/app/services/athentication.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Current_User } from '../../Current_User';

//hena hagyb kol el data lel user el ana me7tagha

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  
  current_user: Current_User;

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
    );
      
    localStorage.setItem('email',btoa(this.form.email));
    localStorage.setItem('password',btoa(this.form.password));
  }

  handleError(error){
    this.error=error.error.error
  }

  handleResponse(data){
    this.token.handle(data.access_token)
    this.auth.changeAuthStatus(true)
    this.router.navigateByUrl('/home')
    // console.log(data);
    // this.current_user = data.user
    // console.log(data);
    // console.log(this.current_user);
    localStorage.setItem('user_name',data.user)
  }

  ngOnInit(): void{
  }

  
 
}

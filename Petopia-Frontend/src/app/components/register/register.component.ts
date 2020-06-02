import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { AuthentictionService, TokenPayload } from 'src/app/authentiction.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit{
  //user : User
  //private userService: UserService
  constructor(private auth :AuthentictionService,private router :Router) { }

  ngOnInit(): void {
   // this.resetForm()
  }
  
  // resetForm(form? :NgForm){

  //   if(form != null)
  //   form.reset()
  //   this.user={
  //     name:'',
  //     email:'',
  //     password:'',
  //     phone_number:'',
  //     recommendation:'',
  //     address:''
  //   }
  // }
  // onSubmit(form : NgForm){
  //   this.userService.register(form.value)
  //   .subscribe((data:any)=>{
  //     if(data.Succeeded==true){
  //       this.resetForm(form)
  //     }
  //   })
  // }
  credenioals:TokenPayload={
    id:0,
    name:'',
    email:'',
    password:'',
    phone_number:'',
    recommendation:'',
    address:''
  }
  register(){
    this.auth.register(this.credenioals).
    subscribe(()=>{
      this.router.navigateByUrl('/home')
    },
    err=>{
      console.log(err);
      
    })
  }
}

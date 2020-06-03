import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit{
  
  constructor(private http:HttpClient) { }

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
    return this.http.post('http://localhost:8000/api/signup',this.form).subscribe(
     
      (data)=>console.log(data),
      error=>this.handleError(error)
    )
  }


  handleError(error){
    this.error=error.error.errors
  }
}

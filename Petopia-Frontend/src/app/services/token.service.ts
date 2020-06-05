import { Injectable } from '@angular/core';
import { decode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss={
    login:"http://localhost:8000/api/login",

    signup:"http://localhost:8000/api/signup"
  }
  constructor() { }


  handle(token){
    this.set(token)
    
  }

  set(token){
    localStorage.setItem('token',token)
  }

  get(){
    return localStorage.getItem('token')
  }

  remove(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    localStorage.removeItem('service_name')
  }

  isValild(){

    const token=this.get()
    if(token){
      const payload=this.payload(token)

      if(payload){
       return Object.values(this.iss).indexOf(payload.iss) >-1 ? true:false
      }
    }
    return false
  }

  payload(token){
    const payload= token.split('.')[1]

    return this.decode(payload)
  }


  decode(payload){
    return JSON.parse(atob(payload))
  }

  loggedIn(){
    return this.isValild()
  }
}
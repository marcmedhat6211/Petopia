import { Injectable } from '@angular/core';
import {Router ,CanActivate,  } from '@angular/router'
import {AuthentictionService} from './authentiction.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthentictionService,private router :Router) { }

  canActivate(){
    if(!this.auth.isLoggedIn()){
      this.router.navigateByUrl('/')
      return false
    }
    return true
  }
}

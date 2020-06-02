import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface UserDetails{
  id:number,
  name : string,
  eamil:string,
  password : string,
  phone_number:string,
  recommendation:string,
  address:string,
  exp:number
}
export interface TokenResponse{
  token:string
}

export interface TokenPayload{

  name:string,
  email:string,
  password:string,
 
}
@Injectable({
  providedIn: 'root'
})
export class AuthentictionService {
  private token:string;
   userUrl:string ="http://localhost:8000";
  constructor(private http: HttpClient,private router :Router) { }

  private saveToken(token:string):void{
    localStorage.setItem('userToken',token);
    this.token=token;
  }

  private getToken():string{
    if(!this.token){
      this.token=localStorage.getItem('userToken')
    }
    return this.token;
  }

  public getUserDetails():UserDetails{
    const token=this.token
    let payload
    if(token){
      payload=token.split('.')[1]
      payload=window.atob(token)
      return JSON.parse(payload)
    }else{
      return null;
    }
  }

  public isLoggedIn():boolean{
    const user=this.getUserDetails()
    if(user){
      return user.exp> Date.now() / 1000
    }else{
      return false
    }
  }

  public register(user : TokenPayload):Observable <any>{
    console.log(user);
    return this.http.post(this.userUrl+'/api/register',user,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    
  }

  public login(user :TokenPayload):Observable<any>{
    const base=this.http.post(
      `/api/login`,
      {email:user.email,password:user.password},
      {
        headers:{"Content-Type":"application/json"}
      }
    )
    console.log(user);
    const request=base.pipe(
      map((data:TokenResponse)=>{
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
    
  }

  public logout():void{
    this.token=''
    window.localStorage.removeItem('userToken')
    this.router.navigateByUrl('/')
  }
}

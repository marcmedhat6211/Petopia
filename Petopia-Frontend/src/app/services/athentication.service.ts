import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AthenticationService {
 
 private baseUrl='http://localhost:8000/api'
  constructor(private http:HttpClient) { }


  register(data){
    return this.http.post(`${this.baseUrl}/signup`,data)
  }


  signin(data){
    return this.http.post(`${this.baseUrl}/login`,data)
  }
}

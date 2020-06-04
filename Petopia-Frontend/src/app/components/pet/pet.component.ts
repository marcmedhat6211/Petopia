import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/User';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  body = {
    "email": atob(window.localStorage.getItem('email')),
    "password": atob(window.localStorage.getItem('password')),
    }; 
  user: User;
  constructor(private petService: PetsService,private http:HttpClient) { }

  ngOnInit(): void {

    this.petService.test()
    .subscribe((data: any[])=>{
      console.log(data);
    }, error => {
      console.log(error)
    },) 

var token = window.localStorage.getItem('token'); 
    this.http.post<User>('http://localhost:8000/api/me', this.body,{
    headers : new HttpHeaders({
    'Accept' : 'application/json',
    'Authorization': `Bearer ${token}`,
    })
    }).subscribe(data => {
      this.user = data;
      console.log(data);
      }); 

  }
//get data from html
  submit(f: NgForm) {
    console.log(f.value);
    const pet = {
      name:f.value.petName,
      user_id:"1",
      // user_id:data.current_user.id,
      breed:f.value.breed,
      birthday:f.value.birthday,
      color:f.value.color,
      neutred:f.value.neutred,
      
      drug_allergies:f.value.allergies,
      current_diet:f.value.diet,
      current_medication:f.value.meds,
      previous_problems:f.value.problems,

    }
    console.log(JSON.stringify(pet,null,2));
    this.addPet(pet);
  }


  addPet(pet) {
    this.petService.registerPet(pet)
    .subscribe((data: any[])=>{
      console.log(data);
    }, error => {
      console.log(error)
    },) 
  }
}

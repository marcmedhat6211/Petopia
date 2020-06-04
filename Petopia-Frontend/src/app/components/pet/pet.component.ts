import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  constructor(private petService: PetsService) { }

  ngOnInit(): void {

    this.petService.test()
    .subscribe((data: any[])=>{
      console.log(data);
    }, error => {
      console.log(error)
    },) 

  }
//get data from html
  submit(f: NgForm) {
    console.log(f.value);
    const pet = {
      name:f.value.petName,
      user_id: "1",
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

import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/pets.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  constructor(private petService: PetsService) { }

  ngOnInit(): void {

    this.petService.registerPet({})
    .subscribe((data: any[])=>{
      console.log(data);
    }, error => {
      console.log(error)
    },) 

  }

  submit(form) {
    console.log({form});
  }
}

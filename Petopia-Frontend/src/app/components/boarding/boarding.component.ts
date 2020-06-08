import { Component, OnInit } from '@angular/core';
import { AthenticationService } from 'src/app/services/athentication.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.scss']
})
export class BoardingComponent implements OnInit {

  constructor(private athentication:AthenticationService, private router: Router, private token :TokenService) { }

  ngOnInit(): void {
  }

  public form={
    pet_name: localStorage.getItem('pet_name'),
    reservation_id: localStorage.getItem('reservation_id'),
    cage_id:null,
    end_date:null,
  }

  public error= null ;
  onSubmit(){
  console.log(this.form);
    this.athentication.boarding(this.form).subscribe(
      (data)=>this.handleResponse(data),
      error=>this.handleError(error)
    )
    // localStorage.removeItem('reservation_id');
  }

  handleError(error){
    this.error=error.error.message
  }

  handleResponse(data){
    this.token.handle(this.token.decode(this.token.get()))
    this.router.navigateByUrl('/home');
  }
}

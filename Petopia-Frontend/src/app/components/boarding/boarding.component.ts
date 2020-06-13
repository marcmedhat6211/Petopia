import { Component, OnInit } from '@angular/core';
import { AthenticationService } from 'src/app/services/athentication.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { id } from 'date-fns/locale';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.scss']
})
export class BoardingComponent implements OnInit {

  flag = 1;
  reservation_date = localStorage.getItem('reservation_date');

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
  // diffTime = Math.abs((this.form.end_date) - (this.reservation_date));
  // diffDays = Math.ceil(this.diffTime / (1000 * 60 * 60 * 24));


  onSubmit(){
      if(this.form.end_date > this.reservation_date)
      {
          this.athentication.boarding(this.form).subscribe(
            (data)=>this.handleResponse(data),
            error=>this.handleError(error)
          )
          alert('Reservation made successfully');
          this.router.navigateByUrl('/home');
      }
      // if(((this.form.end_date) - (this.reservation_date)) / (1000 * 60 * 60 * 24) < 1)
      // {

      // }
      else
      {
        alert('End date must be bigger than Reservation date');
      }
  }

  onCancel(){
    var id = +(localStorage.getItem('reservation_id'))
    this.athentication.deleteReservation(id).subscribe(
      (data)=>this.handleResponse(data)
    )  
    alert('Reservation canceled');
    this.router.navigateByUrl('/home');
  }

  handleError(error){
    this.error=error.error.messaidStringge
  }

  handleResponse(data){
    this.token.handle(data.access_token)
  }
}

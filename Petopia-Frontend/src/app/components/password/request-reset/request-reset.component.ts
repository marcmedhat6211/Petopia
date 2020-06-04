import { Component, OnInit } from '@angular/core';
import { AthenticationService } from 'src/app/services/athentication.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss']
})
export class RequestResetComponent implements OnInit {
  

  public form={
    email:null
  }
  constructor(private authentication:AthenticationService,private notify:SnotifyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.notify.info('wait ...',{timeout:5000})
    this.authentication.sendPasswordResetLink(this.form).
    subscribe(
      data=>this.handleResponse(data),
      error =>this.notify.error(error.error.error)
      
      
    )
  }

  handleResponse(res){
    this.notify.success(res.data,{timeout:0})
    this.form.email=null
  }
}

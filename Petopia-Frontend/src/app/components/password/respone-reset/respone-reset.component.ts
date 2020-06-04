import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AthenticationService } from 'src/app/services/athentication.service';
import { SnotifyService } from 'ng-snotify';

@Component({
  selector: 'app-respone-reset',
  templateUrl: './respone-reset.component.html',
  styleUrls: ['./respone-reset.component.scss']
})
export class ResponeResetComponent implements OnInit {
 

  public error=[]

  public form={
    email:null,
    password:null,
    password_confirmation:null,
    resetToken:null
  }
  constructor(private route: ActivatedRoute,private authentication:AthenticationService,private router:Router,private notify:SnotifyService) { 

    route.queryParams.subscribe((params)=>{
      this.form.resetToken=params['token']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authentication.changePassword(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    )
  }

  handleResponse(data){

    let _router=  this.router
    this.notify.confirm('Login with new Password',{
      buttons:[
        {text: 'Okey', action: (toster) =>{
          _router.navigateByUrl('/login'),
          this.notify.remove(toster.id)
        }
       },

      ]
    });

  }

  handleError(error){
    this.error=error.error.errors
    
  }
}

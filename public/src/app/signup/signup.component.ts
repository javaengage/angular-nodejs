import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name : string;
  email : string;
  password : string;
  role : string;
  constructor(public apiService : ApiService, public router : Router) {
    this.role =  "user";
  }

  onSubmit() {

    let payload : any = {
      name : this.name,
      email : this.email,
      password: this.password,
      role : this.role
    };

    this.apiService.signup(payload).subscribe(
      res =>{
        console.log(res);
        if(res.status == 200){
          localStorage.setItem('user' , JSON.stringify(res));
          this.router.navigateByUrl('/events');
        }
        else{
          alert(res.message);
        }

        //alert('suuccess');
        //alert(JSON.stringify(res));
      },
      err =>{
        alert('err');
        alert(JSON.stringify(err));
      }
    );

  }

}

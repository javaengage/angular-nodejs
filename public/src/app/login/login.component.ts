import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email : string;
  password : string;
  constructor( public apiService : ApiService, public router : Router) {}

  onSubmit() {
    let payload : any = {
      email : this.email,
      password: this.password
    };

    this.apiService.login(payload).subscribe(
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

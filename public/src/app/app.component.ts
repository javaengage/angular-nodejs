import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user : any;

  constructor(public router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));

  }

  signout(){
    localStorage.clear();
    this.user = null;
    this.router.navigateByUrl('/login');

  }

}

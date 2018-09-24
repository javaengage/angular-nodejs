import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {


  event : any;
  user : any;
  constructor( public apiService : ApiService, public router: Router) {

    this.user = JSON.parse(localStorage.getItem('user'));
    //alert(JSON.stringify(this.user));
    this.event = {
      name : '',
      venue : '',
      time : '',
      lng : '',
      lat : '',
      user_id : this.user.data._id
    };
  }

  onSubmit() {
    //alert(JSON.stringify(this.event));
    this.apiService.createEvent(this.event).subscribe(
      res => {
        alert('Event Created');
        this.router.navigateByUrl('/events');

        //alert(JSON.stringify(res));
      },
      err=> {
        alert('err');
        alert(JSON.stringify(err));
      }
    );
  }

}

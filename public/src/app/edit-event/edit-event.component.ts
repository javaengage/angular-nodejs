import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent {

  event : any;
  user : any;
  constructor( public apiService : ApiService, public router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.event = JSON.parse(localStorage.getItem('event'));

    this.event.lng =  this.event.location.coordinates[0];
    this.event.lat =  this.event.location.coordinates[1];


  }

  onSubmit() {
    //alert(JSON.stringify(this.event));
    this.apiService.editEvent(this.event).subscribe(
      res => {
        alert('Event Update');
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

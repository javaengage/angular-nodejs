import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {

  events : any[];
  user : any;
  constructor( public apiService : ApiService, public router: Router) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getEvents();

  }

  getEvents(){

    if(this.user.data.role == 'user'){
      this.apiService.getUserEvents({user_id : this.user.data._id}).subscribe(
        res => {
          //alert('success');
          //alert(JSON.stringify(res));
          this.events = res.data;
        },
        err => {
          alert('err');
          alert(JSON.stringify(err));
        }
      );
    }
    else{

      this.apiService.getEvents().subscribe(
        res => {
          //alert('success');
          //alert(JSON.stringify(res));
          this.events = res.data;
        },
        err => {
          alert('err');
          alert(JSON.stringify(err));
        }
      );

    }
  }

  deleteEvent(event : any){
    this.apiService.deleteEvent({event_id : event._id}).subscribe(
      res => {
        this.getEvents();
      },
      err=>{
        alert('err');
        alert(JSON.stringify(err));

      }
    );
  }

  editEvent(event : any){
    localStorage.setItem('event' , JSON.stringify(event));
    this.router.navigateByUrl('/events/edit');

  }




  goToNewEventsMapPage(){

    this.router.navigateByUrl('/events/map');

  }

  goToNewEventsPage(){

    this.router.navigateByUrl('/events/new');

  }


}

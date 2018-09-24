import { Component } from '@angular/core';
import {ApiService} from "../services/api.service";
import { Router } from '@angular/router';
import {$WebSocket} from 'angular2-websocket/angular2-websocket'



@Component({
  selector: 'app-event-map',
  templateUrl: './event-map.component.html',
  styleUrls: ['./event-map.component.css']
})
export class EventMapComponent {

  events : any[];
  user : any;
  lat = 0;
  lng = 0;
  eventName = '';
  websocket : any;
  event : any;
  constructor( public apiService : ApiService, public router: Router) {
    this.websocket = new $WebSocket("ws://localhost:5500");
    this.websocket.send("connected").subscribe(
      (msg)=> {
      },
      (msg)=> {
      },
      ()=> {
      }
    );
    this.websocket.onMessage(
      (msg: MessageEvent)=> {

        console.log('onMessage', JSON.parse(msg.data));
        this.event = JSON.parse(msg.data);
        this.lng =  this.event.location.coordinates[0];
        this.lat =  this.event.location.coordinates[1];
        this.eventName = this.event.name;
        this.events.push(
          {
            lng : this.lng,
            lat :  this.lat,
            name : this.eventName
          }
        );

        alert('New Event: ' + this.eventName);
      },
      {autoApply: false}
    );

    this.user = JSON.parse(localStorage.getItem('user'));
    this.getEvents();

  }

  getEvents(){

    if(this.user.data.role == 'user'){
      this.apiService.getUserEvents({user_id : this.user.data._id}).subscribe(
        res => {

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
          this.events = res.data;
          for(let i = 0; i < this.events.length; i++){
            let ev = this.events[i];

            this.lng =  ev.location.coordinates[0];
            this.lat =  ev.location.coordinates[1];
            this.eventName = ev.name;
            this.events.push(
              {
                lng : this.lng,
                lat :  this.lat,
                name : this.eventName
              }
            );
          }
        },
        err => {
          alert('err');
          alert(JSON.stringify(err));
        }
      );

    }
  }



}

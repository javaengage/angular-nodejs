import { Routes } from '@angular/router';

//import {Signature} from "@angular/compiler-cli";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {EventComponent} from "./events/event.component";
import {NewEventComponent} from "./new-event/new-event.component";
import {EditEventComponent} from "./edit-event/edit-event.component";
import {EventMapComponent} from "./events-map/event-map.component";

export const AppRoutes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventComponent },
  { path: 'events/new', component: NewEventComponent },
  { path: 'events/edit', component: EditEventComponent },
  { path: 'events/map', component: EventMapComponent },



];

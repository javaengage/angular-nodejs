import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routes';

import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {ApiService} from "./services/api.service";
import {NewEventComponent} from "./new-event/new-event.component";
import {EditEventComponent} from "./edit-event/edit-event.component";
import {EventComponent} from "./events/event.component";
import {AgmCoreModule} from "@agm/core";
import {EventMapComponent} from "./events-map/event-map.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EventComponent,
    NewEventComponent,
    EditEventComponent,
    EventMapComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'Google Maps API Key'
    })
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

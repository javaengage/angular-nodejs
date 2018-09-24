import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  result: any;

  constructor(private _http: Http) { }

  login(body) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/v1/login', body, options)
      .map((res: Response) => res.json());
  }

  signup(body) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/v1/signup', body, options)
      .map((res: Response) => res.json());
  }

  createEvent(body) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/v1/events/create', body, options)
      .map((res: Response) => res.json());
  }

  editEvent(body) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/v1/events/edit', body, options)
      .map((res: Response) => res.json());
  }


  getUserEvents(body) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/v1/events/user', body, options)
      .map((res: Response) => res.json());
  }

  getEvents() {
    var body = {};
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/v1/events', body, options)
      .map((res: Response) => res.json());
  }

  deleteEvent(body) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/v1/events/delete', body, options)
      .map((res: Response) => res.json());
  }


  getNearbyEvents() {
    let body = {
      lat : '8.9059685',
      lng : '2.49584933'
    };
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/v1/events/nearby', body, options)
      .map((res: Response) => res.json());
  }


}

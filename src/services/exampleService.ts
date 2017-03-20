import { Injectable } from '@angular/core';
import { HttpService } from './httpService';

@Injectable()
export class ExampleService {

  constructor(private http: HttpService) {}

  getOk() {
    return this.http.get('http://getstatuscode.com/200');
  }

  getUnauthorized() {
    return this.http.get('http://getstatuscode.com/401');
  }
}

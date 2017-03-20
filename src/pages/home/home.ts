import { Component } from '@angular/core';
import { ExampleService } from '../../services/exampleService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ExampleService]
})
export class HomePage {

  constructor(public exampleService: ExampleService) {
  }

  testOk() {
    this.exampleService.getOk().subscribe();
  }

  testUnauthorized() {
    this.exampleService.getUnauthorized().subscribe();
  }
}

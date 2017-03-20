import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler, App } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HttpService } from '../services/httpService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: HttpService,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions, app: App) => {
         return new HttpService(backend, defaultOptions, app);
      },
      deps: [XHRBackend, RequestOptions, App]
    }
  ]
})
export class AppModule {}

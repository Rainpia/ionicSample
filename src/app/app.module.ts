import { NgModule, ErrorHandler } from '@angular/core';
import { Http, HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// start for http function
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map'
// end for http function 
import { MyApp } from './app.component';

import { ListsPage } from '../pages/lists/lists';

import {ListService} from "./../services/list.service"


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ListsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

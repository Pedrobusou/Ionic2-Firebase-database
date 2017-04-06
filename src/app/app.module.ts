import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';

var firebaseConfig = {
    apiKey: "AIzaSyDMKg4Xk_1GvbZUtExKbOvv17tQlCCsq30",
    authDomain: "fir-test-de004.firebaseapp.com",
    databaseURL: "https://fir-test-de004.firebaseio.com",
    projectId: "fir-test-de004",
    storageBucket: "fir-test-de004.appspot.com",
    messagingSenderId: "991744973627"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

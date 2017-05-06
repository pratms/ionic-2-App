import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Intro } from '../pages/intro/intro';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { D3Page } from '../pages/d3/d3';
import { Songs } from '../pages/songs/songs';
import { SignupPage } from '../pages/signup/signup'; //Added signup page
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { Facebook } from '@ionic-native/facebook'
import { AuthProvider} from '../providers/auth-provider'  //Added AuthProvider
import {
    AngularFireModule,
    AuthMethods,
    AuthProviders
} from 'angularfire2';




const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '05165e34'
  }
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Intro,
    SignupPage,
    ResetPasswordPage,
    D3Page,
    Songs
  ],
  imports: [
   AngularFireModule.initializeApp({
            apiKey: 'AIzaSyDZHd_4UlV393-nOPDq3R-NM5J4UtESYm8',
            authDomain: 'musically-9ab39.firebaseapp.com',
            databaseURL: 'https://musically-9ab39.firebaseio.com',
            storageBucket: 'musically-9ab39.appspot.com'
    
        }, {
            method: AuthMethods.Password,
            provider: AuthProviders.Password
        }),
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Intro,
    SignupPage,
    ResetPasswordPage,
    D3Page,
    Songs
  ],
  providers: [
    Facebook ,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    AuthProvider
  ]
})
export class AppModule {}

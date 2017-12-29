// angular
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

// ionic
import { IonicApp } from "ionic-angular";
import { IonicErrorHandler } from "ionic-angular";
import { IonicModule } from "ionic-angular";
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// case
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';

@NgModule
({
    declarations:
    [
        MyApp,
        HomePage,
        WelcomePage,
        SignupPage,
        ProfilePage,
    ],

    imports:
    [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],

    bootstrap: [IonicApp],

    entryComponents:
    [
        MyApp,
        HomePage,
        WelcomePage,
        SignupPage,
        ProfilePage,
    ],

    providers:
    [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule { }

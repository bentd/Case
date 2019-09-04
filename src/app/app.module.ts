// Angular
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";
import { NgModule } from "@angular/core";

// Ionic
import { IonicApp } from "ionic-angular";
import { IonicErrorHandler } from "ionic-angular";
import { IonicModule } from "ionic-angular";
import { ImagePicker } from "@ionic-native/image-picker";
import { Crop } from "@ionic-native/crop";
import { Camera } from "@ionic-native/camera";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

// Libraries
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

// App
import { App } from "./app.component";
import { RootPage } from "../pages/root/root";
import { SchoolsProvider } from '../providers/schools/schools';
import { SignupProvider } from '../providers/signup/signup';


var firebaseConfig =
{
  apiKey: "AIzaSyAIIfK0ZUa4E4eeBMjeqnDuAd2wCENGE5A",
  authDomain: "bump-4420b.firebaseapp.com",
  databaseURL: "https://bump-4420b.firebaseio.com",
  projectId: "bump-4420b",
  storageBucket: "bump-4420b.appspot.com",
  messagingSenderId: "387406666067"
};


@NgModule
({
    declarations:
    [
        App,
        RootPage
    ],

    imports:
    [
        BrowserModule,
        HttpClientModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(firebaseConfig),
        IonicModule.forRoot(App, {scrollAssist: false, autoFocusAssist: false})
    ],

    bootstrap: [IonicApp],

    entryComponents:
    [
        App,
        RootPage,
    ],

    providers:
    [
        ImagePicker,
		Crop,
		Camera,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        SchoolsProvider,
        SignupProvider
    ]
})
export class AppModule { }

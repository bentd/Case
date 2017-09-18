// Angular
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler } from "@angular/core";
import { NgModule } from "@angular/core";
// import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MdAutocompleteModule } from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Ionic
import { IonicApp } from "ionic-angular";
import { IonicErrorHandler } from "ionic-angular";
import { IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

// Case
import { App } from "./app.component";
import { WelcomePage } from "../pages/welcome/welcome";
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { ForgotPage } from "../pages/forgot/forgot";
import { SchoolPage } from "../pages/school/school";
import { HomePage } from "../pages/home/home";
import { SettingsPage } from "../pages/settings/settings";
import { PostPage } from "../pages/post/post";

@NgModule
({
    declarations:
    [
        App,
        WelcomePage,
        SignupPage,
        LoginPage,
        ForgotPage,
        SchoolPage,
        HomePage,
        SettingsPage,
<<<<<<< Updated upstream
        PostPage,
=======
>>>>>>> Stashed changes
    ],

    imports:
    [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        MdAutocompleteModule,
        MdInputModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        IonicModule.forRoot(App)
    ],

    bootstrap: [IonicApp],

    entryComponents:
    [
        App,
        WelcomePage,
        SignupPage,
        LoginPage,
        ForgotPage,
        SchoolPage,
        HomePage,
<<<<<<< Updated upstream
        SettingsPage,
        PostPage,
=======
        SettingsPage
>>>>>>> Stashed changes
    ],

    providers:
    [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }

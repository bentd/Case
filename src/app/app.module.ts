// Angular
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler } from "@angular/core";
import { NgModule } from "@angular/core";

// Ionic
import { IonicApp } from "ionic-angular";
import { IonicErrorHandler } from "ionic-angular";
import { IonicModule } from "ionic-angular";
// import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

// Case
import { App } from "./app.component";
import { SplashPage } from "../pages/splash/splash";
import { WelcomePage } from "../pages/welcome/welcome";
import { LoginPage } from "../pages/login/login";

@NgModule
({
    declarations:
    [
        App,
        SplashPage,
        WelcomePage,
        LoginPage
    ],

    imports:
    [
        BrowserModule,
        IonicModule.forRoot(App)
    ],

    bootstrap: [IonicApp],

    entryComponents:
    [
        App,
        SplashPage,
        WelcomePage,
        LoginPage
    ],

    providers:
    [
        StatusBar,
        //SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }

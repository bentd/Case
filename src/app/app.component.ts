// Angular
import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";
import { Events } from 'ionic-angular';

// Ionic
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

// App
import { RootPage } from "../pages/root/root";

@Component
({
    templateUrl: "app.html"
})
export class App
{
    rootPage = RootPage;

    loggedIn: boolean = false;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, events: Events)
    {
        platform.ready().then(() =>
        {
            statusBar.styleDefault();
            splashScreen.hide();
        });

        events.subscribe("loggedIn", () => { this.loggedIn = true; });
        events.subscribe("loggedOut", () => { this.loggedIn = false; });
    }
}

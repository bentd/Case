// Angular
import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";

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

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen)
    {
        platform.ready().then(() =>
        {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}

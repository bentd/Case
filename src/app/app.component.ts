// Angular
import { Component } from "@angular/core";

// Ionic
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

// Case
import { WelcomePage } from "../pages/welcome/welcome";

@Component({ templateUrl: "app.html" })
export class App
{
    rootPage: any = WelcomePage;

    constructor
    (
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen
    )
    {
        platform.ready().then(() =>
        {
            statusBar.show();
            splashScreen.hide();
        });
    }
}

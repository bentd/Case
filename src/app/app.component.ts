// Angular
import { Component } from "@angular/core";

// Ionic
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

// Case
import { WelcomePage } from "../pages/welcome/welcome";
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { ForgotPage } from "../pages/forgot/forgot";

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
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.overlaysWebView(false);
            statusBar.show();
            splashScreen.hide();
        });
    }


}

// Angular
import { Component } from '@angular/core';

// Ionic
import { IonicPage } from "ionic-angular";
import { NavController } from "ionic-angular";
import { NavParams } from "ionic-angular";

// App
// import { SignupPage } from "../signup/signup";
// import { BoilerPage } from "../boiler/boiler";

@IonicPage
({
    name: "welcome",
    segment: "welcome"
})
@Component
({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage
{
    constructor(public navigation: NavController, public params: NavParams)
    {
    }

    ngAfterViewInit()
    {
    }

    segueToLogin()
    {
        this.navigation.push("login");
    }

    segueToSignup()
    {
        this.navigation.push("signup2");
    }
}

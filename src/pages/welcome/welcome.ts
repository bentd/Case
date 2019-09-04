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
    swatch1: any;
    swatch2: any;
    swatch3: any;
    loginWrapper: any;

    isVisible: any = true;

    constructor(public controller: NavController, public params: NavParams)
    {

    }

    ngAfterViewInit()
    {
        this.swatch1 = document.getElementById("swatch1");
        this.swatch2 = document.getElementById("swatch2");
        this.swatch3 = document.getElementById("swatch3");
        this.loginWrapper = document.getElementById("wrapper");
    }

    segueToLogin()
    {
        this.loginWrapper.classList.remove("hidden");
    }

    segueToSignup()
    {
        this.loginWrapper.classList.add("hidden");
        this.controller.push("signup");
    }

    segueToForgot()
    {
        this.controller.push("forgot");
    }
}

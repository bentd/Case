// Angular
import { Component } from "@angular/core";

// Ionic
import { NavController } from 'ionic-angular';

// Case
import { SignupPage } from "../signup/signup";

@Component
({
    selector: "page-welcome",
    templateUrl: "welcome.html"
})
export class WelcomePage
{
    swatch1: any;
    swatch2: any;
    swatch3: any;
    loginWrapper: any;

    isVisible: any = true;

    constructor(private controller: NavController)
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
        this.controller.push(SignupPage);
    }
}

// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";

@Component
({
    selector: "page-welcome",
    templateUrl: "welcome.html"
})
export class WelcomePage
{
    constructor(public controller: NavController) { }

    segueToLogIn()
    {
        this.controller.push(LoginPage);
    }

    segueToSignUp()
    {
        this.controller.push(SignupPage);
    }
}

// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
import { WelcomePage } from "../welcome/welcome";
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";
import { HomePage } from "../home/home";

@Component
({
    selector: "page-forgot",
    templateUrl: "forgot.html"
})
export class ForgotPage
{
    constructor(public controller: NavController) { }

    segueToHome()
    {
        this.controller.setRoot(HomePage);
    }

    segueToLogIn()
    {
        this.controller.setRoot(LoginPage);
    }

    segueToSignUp()
    {
        this.controller.setRoot(SignupPage);
    }
}

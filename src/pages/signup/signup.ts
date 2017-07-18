// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
import { WelcomePage } from "../welcome/welcome";

@Component
({
    selector: "page-signup",
    templateUrl: "signup.html"
})
export class SignupPage
{
    constructor(public controller: NavController) { }

    segueToWelcome()
    {
        this.controller.setRoot(WelcomePage);
    }
}

// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
import { WelcomePage } from "../welcome/welcome";
import { ForgotPage } from "../forgot/forgot";

@Component
({
    selector: "page-login",
    templateUrl: "login.html"


})
export class LoginPage
{
    //@ViewChild("ion-content") content: any;

    constructor(public controller: NavController) { }

    segueToWelcome()
    {

        var animations =
        {
            animate: true,
            animation: "ios-transition",
            direction: "back",
        }

        this.controller.setRoot(WelcomePage, null, animations);
    }

    segueToForgot()
    {
        this.controller
    }
}

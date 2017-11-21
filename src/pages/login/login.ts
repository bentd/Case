// Angular
import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
import { ForgotPage } from "../forgot/forgot";
import { SchoolPage } from "../school/school";
import { WelcomePage } from "../welcome/welcome";


@Component
({
    selector: "page-login",
    templateUrl: "login.html"
})
export class LoginPage
{
    @ViewChild("ion-navbar button") button: any;

    constructor(public controller: NavController) { }

    segueToWelcome()
    {
        this.controller.push(WelcomePage);
    }

    segueToForgot()
    {
        this.controller.push(ForgotPage);
    }
}

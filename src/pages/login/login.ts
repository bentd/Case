// Angular
import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";

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
    @ViewChild("ion-navbar button") button: any;

    constructor(public controller: NavController) { }

    segueToForgot()
    {
        this.controller
    }
}

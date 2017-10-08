// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
import { WelcomePage } from "../welcome/welcome";
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";

@Component
({
    selector: "page-edit",
    templateUrl: "edit.html"
})
export class EditPage
{
    constructor(public controller: NavController) { }

    segueToLogIn()
    {
        this.controller.setRoot(LoginPage);
    }

    segueToSignUp()
    {
        this.controller.setRoot(SignupPage);
    }
}

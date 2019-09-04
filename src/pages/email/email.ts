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
    selector: "page-email",
    templateUrl: "email.html"
})
export class EmailPage
{
    constructor(public controller: NavController) { }


}

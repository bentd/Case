// Angular
import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
import { ForgotPage } from "../forgot/forgot";
import { SchoolPage } from "../school/school";

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
        this.controller.push(ForgotPage);
    }

    segueToSchool()
    {
        this.controller.push(SchoolPage);
    }
}

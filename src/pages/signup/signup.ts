// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from 'ionic-angular';

// Case
// mport { BoilerPage } from "../boiler/boiler";

@Component
({
    selector: "page-signup",
    templateUrl: "signup.html"
})
export class SignupPage
{
    constructor(private controller: NavController) { }

/*
    segueToWhereever()
    {
        this.controller.setRoot(Wherever);
    }
*/
}

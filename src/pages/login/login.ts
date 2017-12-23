// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
// mport { BoilerPage } from "../boiler/boiler";

@Component
({
    selector: "page-login",
    templateUrl: "login.html"
})
export class LoginPage
{
    constructor(public controller: NavController) { }

/*
    segueToWhereever()
    {
        this.controller.setRoot(Wherever);
    }
*/
}

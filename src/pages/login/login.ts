// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

@Component
({
    selector: "page-login",
    templateUrl: "login.html"
})
export class LoginPage
{
    //@ViewChild("ion-content") content: any;

    constructor(public controller: NavController) { }
}

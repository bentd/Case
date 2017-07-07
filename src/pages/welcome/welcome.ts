// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

@Component
({
    selector: "page-welcome",
    templateUrl: "welcome.html"
})
export class WelcomePage
{
    constructor(public controller: NavController) { }
}

// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
// mport { BoilerPage } from "../boiler/boiler";

@Component
({
    selector: "page-boiler",
    templateUrl: "boiler.html"
})
export class BoilerPage
{
    constructor(public controller: NavController) { }

/*
    segueToWhereever()
    {
        this.controller.setRoot(Wherever);
    }
*/
}

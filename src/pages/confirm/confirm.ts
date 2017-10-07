// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
// mport { BoilerPage } from "../boiler/boiler";

@Component
({
    selector: "page-confirm",
    templateUrl: "confirm.html"
})
export class ConfirmPage
{
    constructor(public controller: NavController) { }



/*
    segueToWhereever()
    {
        this.controller.setRoot(Wherever);
    }
*/
}

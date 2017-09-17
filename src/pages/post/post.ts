// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
// mport { BoilerPage } from "../boiler/boiler";
// La lal lal

@Component
({
    selector: "page-post",
    templateUrl: "post.html"
})

export class PostPage
{
    constructor(public controller: NavController) { }

/*
    segueToWhereever()
    {
        this.controller.setRoot(Wherever);
    }
*/
}

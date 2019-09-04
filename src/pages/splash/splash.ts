// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
import { WelcomePage } from "../welcome/welcome";

@Component
({
    selector: "page-splash",
    templateUrl: "splash.html"
})
export class SplashPage
{
    constructor(public controller: NavController)
    {

    }

    segueToWelcome()
    {
        setTimeout(() =>
        {
            this.controller.setRoot(WelcomePage);
        },  2000);
    }

    ngAfterViewChecked()
    {
        this.segueToWelcome();
    }

}

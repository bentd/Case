
// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";
// Ionic
import { NavController } from 'ionic-angular';
import { Config } from 'ionic-angular';

// Case
// mport { BoilerPage } from "../boiler/boiler";
import { HomePage } from '../home/home';


@Component
({
    selector: "page-signup",
    templateUrl: "signup.html"
})
export class SignupPage
{
    constructor(public controller: NavController, public config: Config)
    {
    	config.set("ios", "backButtonText", "");
	    config.set("android", "backButtonText", "");
    }

    segueToHome()
    {
        this.controller.setRoot(HomePage);
    }

/*
    segueToWhereever()
    {
        this.controller.setRoot(Wherever);
    }
*/

}

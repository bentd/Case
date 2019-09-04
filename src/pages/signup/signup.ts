// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { IonicPage } from "ionic-angular";
import { NavController } from "ionic-angular";
import { NavParams } from "ionic-angular";
import { Config } from "ionic-angular";

// App
// import { HomePage } from '../home/home';

@IonicPage
({
    name: "signup",
    segment: "signup"
})
@Component
({
  selector: "page-signup",
  templateUrl: "signup.html",
})
export class SignupPage
{
    constructor(public controller: NavController, public params: NavParams, config: Config)
    {
        config.set("ios", "backButtonText", "");
        config.set("android", "backButtonText", "");
    }
    nextSlide()
    {

    }

    segueToHome()
    {
        this.controller.setRoot("home");
    }
}

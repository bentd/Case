// Angular
import { Component } from '@angular/core';

// Ionic
import { IonicPage } from "ionic-angular";
import { NavController } from "ionic-angular";
import { NavParams } from "ionic-angular";
import { Config } from "ionic-angular";

// App
// import { BoilerPage } from "../boiler/boiler";

@IonicPage
({
    name: "login",
    segment: "login"
})
@Component
({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage
{
    constructor(public controller: NavController, public params: NavParams, public config: Config)
    {
        config.set("ios", "backButtonText", "");
        config.set("android", "backButtonText", "");
    }
}

// Angular
import { Component } from '@angular/core';

// Ionic
import { IonicPage } from "ionic-angular";
import { NavController } from "ionic-angular";
import { NavParams } from "ionic-angular";

// App
// import { BoilerPage } from "../boiler/boiler";

@IonicPage
({
    name: "forgot",
    segment: "forgot"
})
@Component
({
    selector: 'page-forgot',
    templateUrl: 'forgot.html',
})
export class ForgotPage
{
    constructor(public controller: NavController, public params: NavParams)
    {
    }
}

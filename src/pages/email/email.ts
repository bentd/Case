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
    name: "email",
    segment: "email"
})
@Component
({
    selector: 'page-email',
    templateUrl: 'email.html',
})
export class EmailPage
{
    constructor(public controller: NavController, public params: NavParams)
    {
    }
}

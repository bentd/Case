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
    name: "boiler",
    segment: "boiler"
})
@Component
({
    selector: 'page-boiler',
    templateUrl: 'boiler.html',
})
export class BoilerPage
{
    constructor(public controller: NavController, public params: NavParams)
    {
    }
}

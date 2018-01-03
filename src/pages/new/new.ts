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
    name: "new",
    segment: "new"
})
@Component
({
    selector: 'page-new',
    templateUrl: 'new.html',
})
export class NewPage
{
    constructor(public controller: NavController, public params: NavParams)
    {
    }
}

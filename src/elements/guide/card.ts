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
    name: "card",
    segment: "card"
})
@Component
({
    selector: 'item-card',
    templateUrl: 'card.html',
})
export class CardPage
{
    constructor(public controller: NavController, public params: NavParams)
    {
    }
}

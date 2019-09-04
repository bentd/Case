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
    name: "cart",
    segment: "cart"
})
@Component
({
    selector: 'page-cart',
    templateUrl: 'cart.html',
})
export class CartPage
{
    constructor(public controller: NavController, public params: NavParams)
    {
    }
}

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
    name: "home",
    segment: "home"
})
@Component
({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage
{
    phase: string = "books";


    constructor(public controller: NavController, public params: NavParams)
    {
    }

    segueToProfile()
    {
        this.controller.push("new");
    }

    segueToCart()
    {
        this.controller.push("cart");
    }

    onInput(event: any)
    {

    }
}

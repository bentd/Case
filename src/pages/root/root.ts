// Angular
import { Component } from '@angular/core';

// Ionic
import { NavController } from "ionic-angular";
import { NavParams } from "ionic-angular";

// App
// import { BoilerPage } from "../boiler/boiler";

@Component
({
    selector: 'page-root',
    templateUrl: 'root.html',
})
export class RootPage
{

    constructor(public controller: NavController, public params: NavParams)
    {
        this.controller.push("welcome");
    }

    ionViewDidLoad()
    {
    }

}

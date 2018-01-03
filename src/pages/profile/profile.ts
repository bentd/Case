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
    name: "profile",
    segment: "profile"
})
@Component
({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage
{
    constructor(public controller: NavController, public params: NavParams)
    {
    }

    ionViewDidLoad()
    {
    }
}

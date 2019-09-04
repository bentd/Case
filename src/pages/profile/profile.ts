// Angular
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Config } from 'ionic-angular';

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

    segueToSettings()
    {
        this.controller.push(SettingsPage);
    }
}

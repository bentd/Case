// Angular
import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { NavController } from 'ionic-angular';
import { Config } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
>>>>>>> a4947e3bdb1197ad563da91ce0b92658ed71061b

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

<<<<<<< HEAD
    ionViewDidLoad()
    {
    }
=======
    segueToSettings()
    {
        this.controller.push(SettingsPage);
    }

>>>>>>> a4947e3bdb1197ad563da91ce0b92658ed71061b
}

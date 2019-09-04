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
    name: "settings",
    segment: "settings"
})
@Component
({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage
{
    constructor(public controller: NavController, public params: NavParams)
    {
    }
}

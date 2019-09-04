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
    name: "signup2",
    segment: "signup2"
})
@Component
({
    selector: 'page-signup2',
    templateUrl: 'signup.html',
})
export class SignupPage2
{
    constructor(public controller: NavController, public params: NavParams)
    {
    }
}

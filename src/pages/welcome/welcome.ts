// Angular
import { Component } from "@angular/core";
//import { ElementRef } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";
import { Hammer } from "ionic-angular/gestures/hammer";

// Case
import { LoginPage } from "../login/login";
// import { SignupPage } from "../signup/signup";

@Component
({
    selector: "page-welcome",
    templateUrl: "welcome.html"
})
export class WelcomePage
{
    swatch1: any;
    swatch2: any;
    swatch3: any;

    isVisible: any = false;

    constructor(public controller: NavController)
    {

    }

    ngAfterViewInit()
    {
        this.swatch1 = document.getElementById("swatch1");
        this.swatch2 = document.getElementById("swatch2");
        this.swatch3 = document.getElementById("swatch3");

        var touchTarget = document.getElementById("touch-target");

        var DIRECTION_VERTICAL = { direction: 24 };
        //https://github.com/ionic-team/ionic/issues/5767
        //http://hammerjs.github.io/getting-started/
        //http://hammerjs.github.io/api/
        let gesture1 = Hammer(touchTarget, DIRECTION_VERTICAL);

        gesture1.get('swipe').set(DIRECTION_VERTICAL);

        gesture1.on("swipe", (event) => { console.log(event); this.isVisible = (event.angle < 0); });
    }

    segueToLogin()
    {
        this.controller.push(LoginPage);
    }

    segueToSignup()
    {
        this.controller.push(LoginPage);
    }
}

// Angular
import { Component } from "@angular/core";
import { ElementRef } from "@angular/core";
import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";

@Component
({
    selector: "page-welcome",
    templateUrl: "welcome.html"
})
export class WelcomePage
{
    zIndices: Array<number> = [-1, -2, -3];

    get zIntro(): number
    {
        return this.zIndices[0];
    }
    get zLogIn(): number
    {
        return this.zIndices[1];
    }
    get zSignUp(): number
    {
        return this.zIndices[2];
    }

    constructor(public controller: NavController)
    {
    }

    ngAfterViewInit()
    {
        var tutorialSwatch = document.getElementById("tutorial");
        console.log(tutorialSwatch);
        tutorialSwatch.addEventListener("click", this.tutorialUp);
    }

    tutorialUp(event: Event)
    {
        console.log(event);
    }

    openIntroduction()
    {
        this.zIndices = [-1, -2, -3];
    }

    openLogIn()
    {
        this.zIndices = [-2, -1, -3];
    }

    openSignUp()
    {
        this.zIndices = [-3, -2, -1];
    }

    segueToLogIn()
    {
        this.controller.push(LoginPage);
    }

    segueToSignUp()
    {
        this.controller.push(SignupPage);
    }
}

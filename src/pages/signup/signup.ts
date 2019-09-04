// Angular
import { Component } from "@angular/core";
import { Http } from '@angular/http';
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
import { WelcomePage } from "../welcome/welcome";

@Component
({
    selector: "page-signup",
    templateUrl: "signup.html"
})
export class SignupPage
{

    user = {};

    constructor(public controller: NavController, public http: Http) { }

    segueToWelcome()
    {
        this.controller.setRoot(WelcomePage);
    }

    createUser()
    {
        console.log(this.user);
        //console.log(this.http.get("localhost:8080/"));
        this.http.post("http://127.0.0.1:8080/adduser/", this.user).subscribe();
    }
}

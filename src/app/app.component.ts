// Angular
import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";
import { NavController } from 'ionic-angular';
import { Nav } from "ionic-angular";

// Ionic
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ProfilePage } from '../pages/profile/profile';

//firebase
import firebase from 'firebase';



// App
import { RootPage } from "../pages/root/root";



@Component
({
    templateUrl: "app.html"
})

export class App

{
    @ViewChild(Nav) controller: Nav;

    rootPage = RootPage;
    profilePage = ProfilePage;


    constructor (platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen)
    {

        firebase.initializeApp({
            apiKey: "AIzaSyDwotXv9UHzmcuhOjEFuvjwPxrMrxxrxd0",
            authDomain: "case-52fe7.firebaseapp.com",
            databaseURL: "https://case-52fe7.firebaseio.com",
            projectId: "case-52fe7",
            storageBucket: "",
            messagingSenderId: "61463844353"

        });

        platform.ready().then(() =>
        {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    segueToProfile()
    {
        this.controller.push("profile");
    }

    segueToSettings()
    {
        this.controller.push("settings");
    }

    segueToWelcome()
    {
        this.controller.push("welcome");
    }
}

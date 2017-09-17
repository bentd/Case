// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";
import { AlertController } from 'ionic-angular';

// Case
//import { WelcomePage } from "../welcome/welcome";
import { SchoolPage } from "../school/school";
import { SettingsPage } from "../settings/settings";
import { PostPage } from "../post/post";


@Component
({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage
{

    testRadioOpen: boolean;
    testRadioResult;

    posts: Array<any> = [];

    constructor(public controller: NavController, public alertCtrl: AlertController)
    {
        this.initializePosts();
    }

    initializePosts()
    {
        var post1: any = {
            user: "Gabriella Watkins",
            title: "Student's Book of College English",
            image: "../assets/img/books/english.jpg",
            description: "This book is essential for both ENC1101 and ENC1102! You really need to get this book to be successful!",
            condition: "Condition: Decent",
            price: 12.99
        };

        var post2: any = {
            user: "John Watkins",
            title: "Student's Book of College Biology",
            image: "../assets/img/books/biology.jpg",
            description: "This book is essential for both ENC1101 and ENC1102! You really need to get this book to be successful!",
            condition: "Decent",
            price: 12.99
        };

        var post3: any = {
            user: "Jessica Watkins",
            title: "Student's Book of College Calculus",
            image: "assets/img/books/calculus.jpg",
            description: "This book is essential for both ENC1101 and ENC1102! You really need to get this book to be successful!",
            condition: "Decent",
            price: 12.99
        };

        this.posts.push(post1);
        this.posts.push(post2);
        this.posts.push(post3);
        console.log(this.posts);
    }

    showRadio() {
      let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Send Email',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
    }

    segueToSchool()
    {
      this.controller.setRoot(SchoolPage);
    }

    segueToSettings()
    {
      this.controller.push(SettingsPage);
    }

    segueToPost()
    {
      this.controller.push(PostPage);
    }

/*
    segueToWhereever()
    {
        this.controller.setRoot(Wherever);
    }
*/
}

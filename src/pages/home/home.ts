// Angular
import { Component } from "@angular/core";
import { Http } from '@angular/http';
import { Headers } from '@angular/http';

// Ionic
import { NavController } from "ionic-angular";
import { AlertController } from 'ionic-angular';

// Case Modules
import { SchoolPage } from "../school/school";
import { SettingsPage } from "../settings/settings";
import { PostPage } from "../post/post";

// Case Providers
import { SchoolData } from "../../providers/school-data";


@Component
({
    selector: "page-home",
    templateUrl: "home.html",
    providers: [SchoolData]
})
export class HomePage
{

    testRadioOpen: boolean;
    testRadioResult;

    school: any;

    posts: Array<any> = [];

    constructor(public controller: NavController, public alertCtrl: AlertController, public schoolData: SchoolData, public http: Http)
    {
        this.initializePosts();
        this.schoolData.getSchool().then((school: any) => // GET SCHOOL ID
        {
            console.log(school);
            console.log(school.id);
            this.school = school;
        }).then(() => // GET POSTS FROM SCHOOL
        {
            var headers = new Headers();
            headers.append("Authorization", "Basic " + btoa("eyJhbGciOiJIUzI1NiIsImV4cCI6MTUwNTg3NjU3MiwiaWF0IjoxNTA1ODcyOTcyfQ.eyJlbWFpbCI6ImJlbnRkQG91dGxvb2suY29tIn0.K04R6kU5hSCK_8c-fDg-JWdmbMi2WDM4faRLntXTBDQ:"));
            this.http.get("http://localhost:5000/posts", {headers: headers, params: {school_id: this.school.id}}).subscribe((response) =>
            {
                var posts = response.json()
                console.log(posts);
                for (var post in posts)
                {
                    this.posts.push(posts[post]);
                }
            })
        });


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

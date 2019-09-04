// Angular
import { Component } from "@angular/core";
import { Http } from '@angular/http';


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

    search: String;

    posts: Array<any> = [];
    filteredPosts: Array<any> = [];

    constructor(public controller: NavController, public alertCtrl: AlertController, public schoolData: SchoolData, public http: Http)
    {
        this.initializePosts();
        this.schoolData.getSchool().then((school: any) => // GET SCHOOL ID
        {
            console.log(school);
            this.school = school;
        }).then(() => // GET POSTS FROM SCHOOL
        {

        });

        this.filteredPosts = this.posts;
    }

    initializePosts()
    {
        console.log("initializing posts");

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
            description: "This book is essential for both BIO1101! You really need to get this book to be successful!",
            condition: "Decent",
            price: 12.99
        };

        var post3: any = {
            user: "Jessica Watkins",
            title: "Student's Book of College Calculus",
            image: "assets/img/books/calculus.jpg",
            description: "This book is essential for both MAC2312! You really need to get this book to be successful!",
            condition: "Decent",
            price: 12.99
        };

        this.posts.push(post1);
        this.posts.push(post2);
        this.posts.push(post3);
        console.log(this.posts);
    }

    filterPosts(event: any)
    {
        console.log(event.target.value);
        let search = event.target.value;

        this.filteredPosts = search ? this.posts.filter(s => this.filter(s, search)) : this.posts;
    }

    filter(post: any, search: String)
    {
        console.log(this.filterByTitle(post, search));
        console.log(this.filterByDescription(post, search));
        return this.filterByTitle(post, search) || this.filterByDescription(post, search);
    }

    filterByTitle(post: any, search: String)
    {
        return post.title.toLowerCase().indexOf(search.toLowerCase()) != -1
    }

    filterByDescription(post: any, search: String)
    {
        return post.description.toLowerCase().indexOf(search.toLowerCase()) != -1
    }



    showRadio() {
      let alert = this.alertCtrl.create();
    alert.setTitle('Gabriella W.');


    alert.addInput({
      type: 'radio',
      label: 'gabriella92@gmail.com',
      value: 'blue',
      //checked: true
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

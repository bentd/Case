// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";

// Case
//import { WelcomePage } from "../welcome/welcome";

@Component
({
    selector: "page-home",
    templateUrl: "home.html"
})
export class HomePage
{

    posts: Array<any> = [];

    constructor(public controller: NavController)
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
            condition: "Decent",
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

/*
    segueToWhereever()
    {
        this.controller.setRoot(Wherever);
    }
*/
}

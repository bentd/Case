// Angular
import { Component } from '@angular/core';
import { Input } from "@angular/core";

// Ionic
import { IonicPage } from "ionic-angular";
import { NavController } from "ionic-angular";
import { NavParams } from "ionic-angular";

// App
// import { BoilerPage } from "../boiler/boiler";

@IonicPage
({
    name: "book",
    segment: "book"
})
@Component
({
    selector: 'book-card',
    templateUrl: 'book.html',
})
export class BookCard
{
    @Input() img: string;
    @Input() title: string;
    @Input() edition: number;
    @Input() author: string;
    @Input() condition: string;
    @Input() professor: string;
    @Input() course: string;
    @Input() price: number;

    constructor(public controller: NavController, public params: NavParams)
    {
    }
}

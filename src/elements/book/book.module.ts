import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { BookCard } from "./book";

@NgModule
({
    declarations:
    [
        BookCard,
    ],

    imports:
    [
        IonicPageModule.forChild(BookCard),
    ],

    exports:
    [
        BookCard,
    ],
})
export class BookCardModule { }

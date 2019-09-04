import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";
import { ProfilePage } from "../profile/profile";
import { BookCardModule } from "../../elements/book/book.module";

@NgModule
({
    declarations:
    [
        HomePage
    ],

    imports:
    [
        BookCardModule,
        IonicPageModule.forChild(HomePage),
    ],
})
export class HomePageModule { }

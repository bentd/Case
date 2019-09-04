import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProfilePage } from "./profile";
import { BookCardModule } from "../../elements/book/book.module";

@NgModule
({
    declarations:
    [
        ProfilePage,
    ],

    imports:
    [
        BookCardModule,
        IonicPageModule.forChild(ProfilePage),
    ],
})
export class ProfilePageModule { }

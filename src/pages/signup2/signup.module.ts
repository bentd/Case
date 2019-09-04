import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SignupPage2 } from "./signup";

@NgModule
({
    declarations:
    [
        SignupPage2,
    ],

    imports:
    [
        IonicPageModule.forChild(SignupPage2),
    ],
})
export class BoilerPageModule { }

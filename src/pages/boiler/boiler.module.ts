import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { BoilerPage } from "./boiler";

@NgModule
({
    declarations:
    [
        BoilerPage,
    ],

    imports:
    [
        IonicPageModule.forChild(BoilerPage),
    ],
})
export class BoilerPageModule { }

import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ImagePicker } from "@ionic-native/image-picker";
import { Crop } from "@ionic-native/crop";
import { Camera } from "@ionic-native/camera";
import { NewPage } from "./new";

@NgModule
({
    declarations:
    [
        NewPage,
    ],

    imports:
    [
        IonicPageModule.forChild(NewPage),
    ],

    providers:
    [
        ImagePicker,
		Crop,
		Camera,
    ]
})
export class NewPageModule { }

// Angular
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler } from "@angular/core";
import { NgModule } from "@angular/core";

// Ionic
import { IonicApp } from "ionic-angular";
import { IonicErrorHandler } from "ionic-angular";
import { IonicModule } from "ionic-angular";
import { ImagePicker } from "@ionic-native/image-picker";
import { Crop } from "@ionic-native/crop";
import { Camera } from "@ionic-native/camera";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

// App
import { App } from "./app.component";
import { RootPage } from "../pages/root/root";


@NgModule
({
    declarations:
    [
        App,
        RootPage,
    ],

    imports:
    [
        BrowserModule,
        IonicModule.forRoot(App,{ platforms : { ios: { scrollAssist: false, autoFocusAssist: false }}})
    ],

    bootstrap: [IonicApp],

    entryComponents:
    [
        App,
        RootPage,
    ],

    providers:
    [
        ImagePicker,
		Crop,
		Camera,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule { }

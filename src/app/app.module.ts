// Angular
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler } from "@angular/core";
import { NgModule } from "@angular/core";
// import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MdAutocompleteModule } from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Ionic
import { IonicApp } from "ionic-angular";
import { IonicErrorHandler } from "ionic-angular";
import { IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule } from '@ionic/storage';

// Case Module
import { App } from "./app.component";
import { WelcomePage } from "../pages/welcome/welcome";
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { ForgotPage } from "../pages/forgot/forgot";
import { SchoolPage } from "../pages/school/school";
import { HomePage } from "../pages/home/home";
import { SettingsPage } from "../pages/settings/settings";
import { PostPage } from "../pages/post/post";
import { EmailPage } from "../pages/email/email";
import { EditPage } from "../pages/edit/edit";
import { PasswordPage } from "../pages/password/password";

// Case providers
import { BackendData } from "../providers/backend-data";
import { SchoolData } from "../providers/school-data";
import { UserData } from "../providers/user-data";
import { PostData } from "../providers/post-data";

@NgModule
({
    declarations:
    [
        App,
        WelcomePage,
        SignupPage,
        LoginPage,
        ForgotPage,
        SchoolPage,
        HomePage,
        SettingsPage,
        PostPage,
        EmailPage,
        EditPage,
        PasswordPage,
    ],

    imports:
    [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        MdAutocompleteModule,
        MdInputModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        /*
        IonicModule.forRoot(App, {}, // { locationStrategy: "path" },
        {
            links:
            [
                { component: WelcomePage, segment: "welcome" },
                { component: SignupPage, segment: "signup" },
                { component: LoginPage, segment: "login" },
                { component: ForgotPage, segment: "forgot" },
                { component: SchoolPage, segment: "school" },
                { component: HomePage, segment: "home" },
                { component: SettingsPage, segment: "settings" },
                { component: PostPage, segment: "post" }
            ]
        }),
        */
        IonicModule.forRoot(App),
        IonicStorageModule.forRoot(),
    ],

    bootstrap: [IonicApp],

    entryComponents:
    [
        App,
        WelcomePage,
        SignupPage,
        LoginPage,
        ForgotPage,
        SchoolPage,
        HomePage,
        SettingsPage,
        PostPage,
        SettingsPage,
        EmailPage,
        EditPage,
        PasswordPage,
    ],

    providers:
    [
        StatusBar,
        SplashScreen,
        SchoolData,
        BackendData,
        UserData,
        PostData,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }

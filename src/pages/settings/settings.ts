// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";
import { AlertController } from 'ionic-angular';


// Case
// import { BoilerPage } from "../boiler/boiler";
import { EmailPage } from "../email/email";
import { PasswordPage } from "../password/password";


@Component
({
    selector: "page-settings",
    templateUrl: "settings.html"
})
export class SettingsPage
{
    settings: Array<any> =
    [
        {
            title: "Change Email",
            action: this.segueToEmail,
            controller: this.controller
        },
        {
            title: "Change Password",
            action: this.segueToPassword,
            controller: this.controller
        },
        {
            title: "Logout",
            action: this.showConfirm,
            alertCtrl: this.alertCtrl
        },
        {
            title: "Delete Account",
            action: this.showConfirm,
            alertCtrl: this.alertCtrl
        },
    ];

    constructor(public controller: NavController, public alertCtrl: AlertController) { }

  showConfirm() {
   let confirm = this.alertCtrl.create({
     title: 'Delete Account?',
     message: 'This will erase user information as well as posts',
     buttons: [
       {
         text: 'Cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Agree',
         handler: () => {
           console.log('Agree clicked');
         }
       }
     ]
   });
   confirm.present();
 }

 segueToPassword()
 {
     this.controller.push(PasswordPage);
 }

 segueToEmail()
 {
     this.controller.push(EmailPage);
 }

}

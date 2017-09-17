// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";
import { AlertController } from 'ionic-angular';


// Case
// mport { BoilerPage } from "../boiler/boiler";

@Component
({
    selector: "page-settings",
    templateUrl: "settings.html"
})
export class SettingsPage
{
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
}


/*
    segueToWhereever()
    {
        this.controller.setRoot(Wherever);
    }
*/

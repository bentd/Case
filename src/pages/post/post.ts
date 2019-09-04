// Angular
import { Component } from "@angular/core";
//import { ViewChild } from "@angular/core";

// Ionic
import { NavController } from "ionic-angular";
import { AlertController } from 'ionic-angular';

// Case
// mport { BoilerPage } from "../boiler/boiler";
// La lal lal

@Component
({
    selector: "page-post",
    templateUrl: "post.html"
})

export class PostPage
{

    testRadioOpen: boolean;
    testRadioResult;

    constructor(public controller: NavController, public alertCtrl: AlertController) { }

    showRadio() {
      let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Send Email',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
    }


/*
    segueToWhereever()
    {
        this.controller.setRoot(Wherever);
    }
*/
}

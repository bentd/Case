import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Config } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage
{
    constructor(public controller: NavController)
    {

    }

    segueToSettings()
    {
        this.controller.push(SettingsPage);
    }

}

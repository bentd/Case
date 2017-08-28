// Angular
import { Injectable } from '@angular/core';

// Ionic
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserData
{
    constructor(
    public events: Events,
    public storage: Storage
    ) {}
}

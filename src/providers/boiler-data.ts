// Angular
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

// Ionic
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Case


@Injectable()
export class BoilerData
{
    constructor(public events: Events, public http: Http, public storage: Storage) { }

    setProperty()
    {

    }

    getProperty(): Promise<any>
    {
        return
    }
}

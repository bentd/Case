// Angular
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

// Ionic
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Case


@Injectable()
export class BackendData
{
    constructor(public events: Events, public http: Http, public storage: Storage) { }

    setAddress()
    {
        this.storage.set("address", "http://localhost:5000");
    }

    /*
    getAddress(): Promise<string>
    {
        return this.storage.get("address").then((address) => { return address })
    }
    */

    getAddress()
    {
        return new Promise((resolve, reject) =>
        {
            resolve("http://localhost:5000");
        })
    }
}

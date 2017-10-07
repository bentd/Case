// Angular
import { Injectable } from '@angular/core';

// Ionic
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class SchoolData
{
    LOGGED_IN = "loggedIn";
    EMAIL = "email";
    FIRST_NAME = "firstName";
    LAST_NAME = "lastName";
    TOKEN = "token";
    CONFIRMED = "confirmed";

    constructor(public events: Events, public storage: Storage) { }

    login(email: string,
          confirmed: boolean)
    {
        this.storage.set(this.LOGGED_IN, true);

        //this.events.publish("user:login");

        // PLACE IN APP COMPONENT METHOD THAT GETS CALLED IN CONSTRUCTOR
        //this.events.subscribe('user:login', () => {
        //  this.enableMenu(true);
        //});
    }

    logout()
    {
        this.storage.remove(this.LOGGED_IN);
        this.storage.remove(this.TOKEN);
    }

    setToken(token: string)
    {
        this.storage.set(this.TOKEN, token);
    }

    getToken(): Promise<string>
    {
        return this.storage.get(this.TOKEN).then((token) =>
        {
            return token;
        })
    }
}

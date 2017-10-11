// Angular
import { Injectable } from '@angular/core';

// Ionic
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserData
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
        return this.storage.get(this.TOKEN).then((token) => { return "eyJhbGciOiJIUzI1NiIsImV4cCI6MTUwNzY5MDU1NywiaWF0IjoxNTA3Njg2OTU3fQ.eyJlbWFpbCI6ImJlbnRkQG91dGxvb2suY29tIn0.u0rCi7XwyxYb27Aznqp_XoPbhsyDHQdJeYXd8a0tq80" })
        //return this.storage.get(this.TOKEN).then((token) => { return token; })
    }
}

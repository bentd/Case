// Angular
import { Injectable } from '@angular/core';

// Ionic
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class SchoolData
{
    constructor(public events: Events, public storage: Storage) { }

    setSchool(school_id: number)
    {
        this.storage.set("school_id", school_id);
    }

    getSchool(): Promise<string>
    {
        return this.storage.get("school_id").then((school_id) => { return school_id; });
    }


}

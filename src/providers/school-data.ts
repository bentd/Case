// Angular
import { Injectable } from '@angular/core';

// Ionic
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Injectable()
export class SchoolData
{
    constructor(public events: Events, public storage: Storage) { }

    getSchools(): Promise<any>
    {
        this.http.get("http://localhost:5000/schools").subscribe((response) =>
        {
            this.schools = response.json();
            console.log("this.schools 1: ");
            console.log(this.schools)
        });
    }

    setSchool(school: any)
    {
        this.storage.set("school", school);
    }

    getSchool(): Promise<any>
    {
        return this.storage.get("school").then((school) => { return school; });
    }

    removeSchool()
    {
        //this.storage.clear();
        this.storage.remove("school");
    }
}

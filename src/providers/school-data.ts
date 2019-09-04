// Angular
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

// Ionic
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Case
import { BackendData } from "./backend-data";

@Injectable()
export class SchoolData
{
    constructor(public backendData: BackendData, public events: Events, public http: Http, public storage: Storage) { }

    setSchools(): Promise<any>
    {
        this.backendData.getAddress().then((address: string) =>
        {
            console.log("inside setSchools");
            this.http.get(address.concat("/schools")).subscribe((response) =>
            {
                console.log("inside http get");
                this.storage.set("schools", response.json());
                console.log(response.json());
            })
        });

        return new Promise((resolve, reject) => { resolve(); })
    }

    getSchools(): Promise<any>
    {
        return this.storage.get("schools").then((schools) => { return schools })
    }

    setSchool(school: any)
    {
        this.storage.set("school", school);
    }

    getSchool(): Promise<any>
    {
        return this.storage.get("school").then((school) => { return school })
    }

    deleteSchool()
    {
        this.storage.remove("school");
    }
}

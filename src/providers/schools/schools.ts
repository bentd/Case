// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Libraries
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SchoolsProvider
{
    constructor(public db: AngularFireDatabase, public http: HttpClient)
    {
    }

    getSchools()
    {
        return this.db.object("/schools").valueChanges();
    }
}

// Angular
import { Headers } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

// Ionic
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

// Case
import { BackendData } from "./backend-data";
import { SchoolData } from "./school-data";
import { UserData } from "./user-data";


@Injectable()
export class PostData
{
    constructor(public backendData: BackendData, public events: Events, public http: Http, public schoolData: SchoolData, public storage: Storage, public userData: UserData) { }

    getPosts()
    {
        var posts: any;

        this.backendData.getAddress().then((address: string) =>
        {
            this.userData.getToken().then((token: string) =>
            {
                this.schoolData.getSchool().then((school: any) =>
                {
                    var headers = new Headers();
                    headers.append("Authorization", "Basic ".concat(token));

                    this.http.get(address.concat("/posts"), { headers: headers, params: { schoolid: school.id }}).subscribe((response) =>
                    {
                        posts = response.json()
                        console.log(posts);
                    })
                })
            })
        })

        return posts;
    }
}

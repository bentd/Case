// Angular
import { Component } from "@angular/core";
import { Http } from '@angular/http';

// Ionic
import { NavController } from "ionic-angular";

// Case Modules
import { HomePage } from "../home/home";

// Case Providers
import { SchoolData } from "../../providers/school-data";


@Component
({
    selector: "page-school",
    templateUrl: "school.html",
    providers: [SchoolData]
})
export class SchoolPage
{
    schools: Array<{id: number, name: String, abbr: String}> = [];
    search: String;

    filteredSchools: Array<{name: String, abbr: String}>;
    selected: {id: number, name: String, abbr: String};

    constructor(public controller: NavController, public http: Http, public schoolData: SchoolData)
    {
        this.http.get("http://216.162.146.156:5000/schools").subscribe((response) =>
        {
            this.schools = response.json();
            console.log("this.schools 1: ");
            console.log(this.schools)
        });

        console.log("this.schools 2: ");
        console.log(this.schools);

        this.schoolData.removeSchool();
    }

    addSchool(school: any)
    {
        this.selected = school;
    }

    removeSchool(school: any)
    {
        this.selected = null;
    }

    filterSchools(event: any)
    {
        let search = event.target.value;

        this.filteredSchools = search ? this.schools.filter(s => this.filter(s, search)).slice(0, 7) : this.schools;
    }

    filter(school: any, search: String)
    {
        return this.filterByName(school, search) || this.filterByAbbreviation(school, search);
    }

    filterByName(school: any, name: String)
    {
        return school.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    }

    filterByAbbreviation(school: any, abbr: String)
    {
        return school.abbr ? school.abbr.toLowerCase().indexOf(abbr.toLowerCase()) === 0 : false
    }

    segueToHome()
    {
        if (this.selected)
        {
            console.log(this.selected);
            this.schoolData.setSchool(this.selected);
            this.controller.setRoot(HomePage);
        }
    }
}

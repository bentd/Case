// Angular
import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';
//import { MdAutocompleteModule } from '@angular/material';
//import {MdInputModule} from '@angular/material';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgFor } from "@angular/common";
//import { ViewChild } from "@angular/core";

import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

// Ionic
import { NavController } from "ionic-angular";

// Case
import { schoolsList } from "./schools";

@Component
({
    selector: "page-school",
    templateUrl: "school.html"
})
export class SchoolPage
{
    formControl: FormControl;
    filteredSchools: Array<{title: String, abbr: String}>;
    filteredFruits: Observable<Array<String>>;
    search: String;

    schools: Array<{title: String, abbr: String}> = [];
    titles: Array<String> = [];
    abbrs: Array<String> = [];
    foo: Array<String> = ["apple", "banana"];

    selected: Array<{title: String, abbr: String}> = [];

    constructor(public controller: NavController)
    {
        this.formControl = new FormControl();

        for (let key in schoolsList)
        {
            this.schools.push({title: key, abbr: schoolsList[key]});
            this.titles.push(key);
            this.abbrs.push(schoolsList[key]);
        }

        console.log(this.schools);
    }

    addSchool(school: any)
    {
        if (this.selected.indexOf(school) != -1)
        {
            return;
        }

        this.selected.push(school);
    }

    removeSchool(school: any)
    {
        this.selected.splice(this.selected.indexOf(school), 1);
    }

    filterSchools(event: any)
    {
        let search = event.target.value;

        this.filteredSchools = search ? this.schools.filter(s => this.filter(s, search)) : [];
    }

    filter(school: any, search: String)
    {
        return this.filterByTitle(school, search) || this.filterByAbbreviation(school, search);
    }

    filterByTitle(school: any, title: String)
    {
        return school.title.toLowerCase().indexOf(title.toLowerCase()) === 0
    }

    filterByAbbreviation(school: any, abbr: String)
    {
        return school.abbr.toLowerCase().indexOf(abbr.toLowerCase()) === 0
    }

/*
    segueToWhereever()
    {
        this.controller.setRoot(Wherever);
    }
*/
}

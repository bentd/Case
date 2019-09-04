// Angular
import { Component } from "@angular/core";
import { ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Validators } from '@angular/forms';
import { FormControl } from "@angular/forms";
import { AbstractControl } from "@angular/forms";

// Ionic
import { IonicPage } from "ionic-angular";
import { NavController } from "ionic-angular";
import { NavParams } from "ionic-angular";
import { Config } from "ionic-angular";

// App
// import { } from "";
import { SchoolsProvider } from "../../providers/schools/schools";

@IonicPage
({
    name: "signup",
    segment: "signup"
})
@Component
({
    selector: "page-signup",
    templateUrl: "signup.html",
})
export class SignupPage
{
    @ViewChild("slider") slider: any;
    accountForm: FormGroup;
    confirmIsCorrect: boolean = false;
    nextButtonEnabled: Array<boolean> = [true, false, false, false, false, false, false];

    schools: Array<any> = [];
    selectedSchool: string;
    filteredSchools: any;

    get password(): string
    {
        return this.accountForm ? this.accountForm.get("password").value : "";
    }

    get formIsCorrect(): boolean
    {
        return this.accountForm.valid && this.confirmIsCorrect;
    }

    constructor(public navigation: NavController, public params: NavParams, public config: Config, public formBuilder: FormBuilder, public schoolsProvider: SchoolsProvider)
    {

        config.set("ios", "backButtonText", "");
        config.set("android", "backButtonText", "");

        this.accountForm = new FormGroup
        ({
                email: new FormControl("", [Validators.pattern("[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"), Validators.required]),
                password: new FormControl("", [Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9$@$!%*?&]{8,}"), Validators.required]),
                confirm: new FormControl("", [Validators.required]),
                name: new FormControl("", [Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required]),
                school: new FormControl("", [Validators.required]),
                year: new FormControl("", [Validators.required])
        });

        this.schoolsProvider.getSchools().subscribe((data) =>
        {
            var i = 0;
            var school: string;
            for (school in data)
            {
                var obj = {};
                obj["name"] = data[school];
                obj["abbr"] = school;
                this.schools[i] = obj;
                i++;
            }
        });
    }

    ngOnInit()
    {
        this.slider.lockSwipeToNext(true);
    }

    inputCheck(event: any, slide: number)
    {
        switch(slide)
        {
            case 1:
                this.nextButtonEnabled[1] = this.accountForm.controls.email.valid;
                // does email already exist in database?
                break;
            case 2:
                this.nextButtonEnabled[2] = this.accountForm.controls.password.valid;
                break;
            case 3:
                this.confirmIsCorrect = (this.password == event.target.value);
                this.nextButtonEnabled[3] = this.confirmIsCorrect;
                break;
            case 4:
                this.nextButtonEnabled[4] = this.accountForm.controls.name.valid;
                break;
            case 5:
                this.filterSchools(event);
                this.nextButtonEnabled[5] = this.accountForm.controls.school.valid;
                break;
            case 6:
                this.nextButtonEnabled[6] = this.accountForm.controls.year.valid;
                break;
        }
    }

    filterSchools(event: any)
    {
        let search = event.target.value;

        this.filteredSchools = search ? this.schools.filter(s => this.filter(s, search)).slice(0, 4) : [];

        console.log(this.filteredSchools);
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

    addSchool(school: any)
    {
        this.selectedSchool = school;
        this.accountForm.controls.school.setValue(school.name);
        console.log(school);
    }

    removeSchool(school: any)
    {
        this.selectedSchool = null;
    }

    nextSlide()
    {
        this.slider.lockSwipeToNext(false);
        this.slider.slideNext();
        this.slider.lockSwipeToNext(true);
    }

    submitForm()
    {

    }

    segueToHome()
    {
        this.navigation.setRoot("home");
    }
}

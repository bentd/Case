// Angular
import { Component, ViewChild } from "@angular/core";
import { Slides } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//import { ViewChild } from "@angular/core";

// Ionic
import { IonicPage } from "ionic-angular";
import { NavController } from "ionic-angular";
import { NavParams } from "ionic-angular";
import { Config } from "ionic-angular";

// App
// import { HomePage } from '../home/home';

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
    @ViewChild('signupSlider') signupSlider: any;

    slideOneForm: FormGroup;
    slideTwoForm: FormGroup;
    slideThreeForm: FormGroup;
    slideFourForm: FormGroup;

    submitAttempt: boolean = false;

    isenabled: boolean=false;

    get password(): string
    {
        return this.slideThreeForm.value.password;
    }



    constructor(public controller: NavController, public params: NavParams, config: Config, public formBuilder: FormBuilder)
    {
        config.set("ios", "backButtonText", "");
        config.set("android", "backButtonText", "");

        this.slideOneForm = formBuilder.group({
            fullName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        });

        this.slideTwoForm = formBuilder.group({
            email: ['', Validators.compose([Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), Validators.required])],
        });

        this.slideThreeForm = formBuilder.group({
            password: ['', Validators.compose([Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9$@$!%*?&]{8,}"), Validators.required])],
        });

        this.slideFourForm = this.formBuilder.group({
            confirm: ['', Validators.compose([Validators.pattern(this.password), Validators.required])],
        });


    }

    inputCheck(event: any, slide: number)
    {
        switch (slide)
        {
            case 1:
                this.isenabled = this.slideOneForm.valid;
                break;
            case 2:
                this.isenabled = this.slideTwoForm.valid;
                break;
            case 5:
                this.isenabled = this.slideThreeForm.valid;
                break;
            case 6:
                this.isenabled = this.slideFourForm.valid;
                break;
        }
    }

    passwordMatchValidator(foo: any)
    {
        return foo.get("confirm") === this.slideThreeForm.value ? null : {'mismatch': true};
    }

    nextSlide()
    {
        this.isenabled = false;
        this.signupSlider.slideNext();
    }

    segueToHome()
    {
        this.controller.setRoot("home");
    }

    save()
    {
        this.submitAttempt = true;

        if(this.slideOneForm.valid) {
            this.signupSlider.slideNext();
        }
        else if(!this.slideTwoForm.valid) {
            this.signupSlider.slideNext();
        }

        else {
            console.log("success!")
            console.log(this.slideOneForm.value);
            console.log(this.slideTwoForm.value);
            console.log(this.slideThreeForm.value);
        }
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SignupProvider
{
    constructor(public http: HttpClient)
    {
    
    }

}

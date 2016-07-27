import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ControlGroup, FormBuilder, Validators} from "angular2/common";
@Component({
    templateUrl: './app/Users/addUser.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AddUserComponent {
    form: ControlGroup;
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.compose([Validators.required])],
            email: ['', Validators.compose([Validators.required])]
        });
    }
}

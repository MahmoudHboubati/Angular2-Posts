import {Component} from 'angular2/core';
import {Observable} from 'rxjs/observable';
import {UsersService} from './users.service';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {TemplatesUrls} from '../templatesUrls';

@Component({
    // template: '<h1>Users</h1>'
    templateUrl: TemplatesUrls.users + 'users.component.html',
    providers: [UsersService],
    directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent {

    users: [{}];

    constructor(private usersService: UsersService) {
        usersService.getUsers().subscribe(
            users => { console.log('logging ' + typeof (users)); this.users = users; });
    }
}

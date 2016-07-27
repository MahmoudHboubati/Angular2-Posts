import { Component } from 'angular2/core';
import { NavBarComponent } from './navbar.component';
import { PostsComponent } from './posts.component';
import { RouteConfig } from 'angular2/router';
import { UsersComponent } from './Users/users.component';
import {HomeComponent} from "./home.component";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import { AddUserComponent } from './Users/addUser.component';
@Component({
    selector: 'my-app',
    templateUrl: `app/app.template.html`,
    directives: [NavBarComponent, PostsComponent, UsersComponent, HomeComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/posts', name: 'Posts', component: PostsComponent, useAsDefault: true },
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/users/add', name: 'UsersAdd', component: AddUserComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Posts'] }
])
export class AppComponent {
}

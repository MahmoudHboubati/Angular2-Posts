System.register(['angular2/core', './navbar.component', './posts.component', 'angular2/router', './Users/users.component', "./home.component", './Users/addUser.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navbar_component_1, posts_component_1, router_1, users_component_1, home_component_1, router_2, addUser_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (addUser_component_1_1) {
                addUser_component_1 = addUser_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/app.template.html",
                        directives: [navbar_component_1.NavBarComponent, posts_component_1.PostsComponent, users_component_1.UsersComponent, home_component_1.HomeComponent, router_2.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent, useAsDefault: true },
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/users/add', name: 'UsersAdd', component: addUser_component_1.AddUserComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Posts'] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
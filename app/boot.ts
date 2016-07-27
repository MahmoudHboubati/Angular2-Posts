import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from "angular2/router";

// import 'jquery';

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, ROUTER_DIRECTIVES]); // finally bootstrap it.

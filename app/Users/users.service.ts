import {Http, Response} from 'angular2/http';
import { Injectable } from 'angular2/core';
import {Observable, } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
    private url: string = 'https://jsonplaceholder.typicode.com/users';

    constructor(private _http: Http) {
    }

    getUsers(): Observable<[any]> {
        return this._http.get(this.url).map(this.extractData);
    }

    private extractData(res: Response): any {
        let body = res.json();
        return body || {};
    }
}

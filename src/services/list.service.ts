import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ListService {
    constructor(public http:Http) {
    }
    getLists(){
        return this.http
        .get('./assets/data/list.json')
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
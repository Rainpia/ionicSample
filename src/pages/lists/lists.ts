import { Component } from '@angular/core';
import { Http } from "@angular/http";


@Component({
  templateUrl: 'lists.html'
})
export class ListsPage {
  lists:Array<{id:number,label:string}>;
  constructor(private http:Http) {
    this.getList();
    
  }

  getList (){
    this.http
      .get('assets/data/list.json')
      .subscribe((result)=>{
        this.lists = result.json();
      });
  }
}

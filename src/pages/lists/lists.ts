import { Component } from '@angular/core';

import {ListService} from "./../../services/list.service"


@Component({
  templateUrl: 'lists.html'
})
export class ListsPage {
  lists:Array<{id:number,label:string}>;
  constructor(private listService:ListService) {
  }
  ngOnInit(): void {
    this.listService.getLists()
    .then(
      data => {
        this.lists = data;
      },
      error =>{
        console.log(error);
      }
    );
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    return this.listService.getLists()
            .then(
              data => {
                if(this.lists.length<30){
                  this.lists = this.lists.concat(data);
                }
                infiniteScroll.complete();
              },
              error =>{
                console.log(error);
              }
            );
  }
}

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
        console.log(data);
        this.lists = data;
      },
      error =>{
        console.log(error);
      }
    );
  }
}

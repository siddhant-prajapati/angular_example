import { Injectable } from '@angular/core';


export class MultiServiceService {

  constructor() { }

  list : number[] = [25];

  addData(val:number){
    this.list.push(val)
  }

  showData(){
    return this.list;
  }
}

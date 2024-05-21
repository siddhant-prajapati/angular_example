import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonServiceService {

  constructor() { }

  list : any[] = [25];

  addData(val:any){
    this.list.push(val)
  }

  showData(){
    return this.list;
  }
}

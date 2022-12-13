import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
//use subject
  private searchData: Subject<any> = new BehaviorSubject<any>('');

  getSearch() {
    return this.searchData.asObservable();
  }

  addSearch(data: any) {
    this.searchData.next(data);
  }
}

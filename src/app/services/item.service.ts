import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Item } from '../model/item';
import { ErrorHandleService } from './error-handle.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorHandleService
  ) {}

  apiURL = 'http://145.239.206.89/Interview/api/test/items/';

  httpParams = new HttpParams();

  // HttpClient API get() method => Fetch and search item list
  searchItems(name?: string): Observable<any> {
    if (name && name) this.httpParams = this.httpParams.set('SearchText', name);

    return this.http
      .get<any>(
        this.apiURL +
          '?fields=id,name,description,ItemCategory,DefaultPriceConcessionID,DefaultPriceConcessionName,active&page.number=1&page.size=10',

        { params: this.httpParams }
      )
      .pipe(retry(1), catchError(this.errorService.handleError));
  }
  // HttpClient API get() method => Fetch  item
  getItem(id: any, priceconcessionid: any): Observable<any> {
    this.httpParams = this.httpParams.set(
      'priceconcessionid',
      priceconcessionid
    );
    return this.http
      .get<any>(this.apiURL + id + '?include=itempricegroups,pricegroups', {
        params: this.httpParams,
      })
      .pipe(retry(1), catchError(this.errorService.handleError));
  }
}

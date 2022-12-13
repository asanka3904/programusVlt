import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { ErrorHandleService } from './error-handle.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiURL = 'http://145.239.206.89/Interview/api/test/tasks';

  httpParams = new HttpParams();

  constructor(
    private http: HttpClient,
    private errorService: ErrorHandleService
  ) {}

  // HttpClient API get() method => Fetch and search task list
  searchTasks(
    params?: { paramName: string; paramValue: any }[]
  ): Observable<any> {
    if (params && params.length > 0) {
      params.forEach((value) => {
        this.httpParams = this.httpParams.set(
          value.paramName,
          value.paramValue
        );
      });
    }else{
      this.httpParams=new HttpParams();
    }

    return this.http
      .get<any>(
        this.apiURL +
          '?DueOn=7&include=AssignedUsers&page.number=1&page.size=10',
        { params: this.httpParams }
      )
      .pipe(retry(1), catchError(this.errorService.handleError));
  }
}

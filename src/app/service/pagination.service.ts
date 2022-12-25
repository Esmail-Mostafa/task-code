import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor(private _HttpClient: HttpClient) {}

  showCompanies(pageNumber: number): Observable<any> {
    return this._HttpClient.get(
      `https://forall.sa/services/api/ads/companies?page=${pageNumber}`
    );
  }
}

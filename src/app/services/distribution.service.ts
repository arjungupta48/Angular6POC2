import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDistribution } from '../models/distribution';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistributionService {

  private _url:string = "/assets/data/distribution.json"

  constructor( private _http: HttpClient ) { }

  getDistributions(): Observable<IDistribution[]> {
    return this._http.get<IDistribution[]>(this._url);
  }
}

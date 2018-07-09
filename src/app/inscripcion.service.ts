import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable()
export class InscripcionService {
  _url = '';
  constructor(private _http: HttpClient) {
  }

  inscribir(user: User) {
    return this._http.post<any>(this._url, user);
  }

}

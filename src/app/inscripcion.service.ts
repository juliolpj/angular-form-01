import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class InscripcionService {
  _url = 'http://localhost:3000/inscribir';
  constructor(private _http: HttpClient) {
  }

  inscribir(user: User) {
    return this._http.post<any>(this._url, user);
  }

}

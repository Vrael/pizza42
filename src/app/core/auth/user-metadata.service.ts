import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { concatMap, tap, pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserMetadataService {

  private APIUrl = environment.auth.audience;

  metadata: any = {};

  constructor(public auth: AuthService, private http: HttpClient) {}
  
  get(): Observable<any> {
    return this.auth.user$
      .pipe(
        concatMap((user) => this.http.get(encodeURI(`${this.APIUrl}users/${user?.sub}`))),
        pluck('user_metadata'),
        tap((meta) => (this.metadata = meta))
      );
  }

  update(value: any): Observable<any> {
    return this.auth.user$
      .pipe(
        concatMap((user) => this.http.patch(encodeURI(`${this.APIUrl}users/${user?.sub}`), { user_metadata: value })),
        pluck('user_metadata'),
        tap((meta) => (this.metadata = meta))
      );
  }  
}

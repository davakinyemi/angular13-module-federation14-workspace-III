import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthUserData, AuthUserResponse } from 'src/app/core/auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  register(data: AuthUserData): Observable<AuthUserResponse> {
    return this.http.post<AuthUserResponse>(`${this.apiUrl}/register`, data);
  }

  login(data: AuthUserData): Observable<AuthUserResponse> {
    return this.http.post<AuthUserResponse>(`${this.apiUrl}/login`, data);
  }
}

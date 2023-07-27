import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged: boolean = false;
  constructor() {
    this.isLogged = Boolean(localStorage.getItem('isLogged'));
  }

  logout() {
    localStorage.removeItem('token');
    dispatchEvent(new CustomEvent('app-event-bus', {
      bubbles: true,
      detail: {
        eventType: 'auth-confirm'
      }
    }));
    this.isLogged = false;
  }
}

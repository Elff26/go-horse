import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private onAuth = new Subject<boolean>();
  logged: boolean = false;

  constructor() { }

  onLogin() {
    this.logged = true;

    this.onAuth.next(this.logged);
  }

  getAuth() {
    return this.logged;
  }

  onLogout() {
    this.logged = false;
    
    this.onAuth.next(this.logged);
  }

  getAuthUpdated() {
    return this.onAuth.asObservable();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userLogged: any = {};
  private onAuth = new Subject<boolean>();
  private onModal = new Subject<string>();
  logged: boolean = false;

  constructor(private http: HttpClient) { }

  getModalUpdated(){
    return this.onModal.asObservable();
  }

  onLogin(email:string, password:string) {
    this.logged = true;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('senha', password);
    
    this.http.post<any>('http://localhost:80/go-horse/backend/user.php', formData).subscribe(response => {
      localStorage.setItem('user', JSON.stringify(response));
      this.userLogged = response;
    });

    this.onAuth.next(this.logged);
  }

  getAuth() {
    return this.logged;
  }
  
  setAuth(auth: boolean) {
    this.logged = auth;
    this.onAuth.next(this.logged);
  }

  onLogout() {
    this.logged = false;

    localStorage.clear();
    
    this.http.post<any>(`http://localhost:80/go-horse/backend/logout.php`, null).subscribe();

    this.onAuth.next(this.logged);
  }

  getAuthUpdated() {
    return this.onAuth.asObservable();
  }

  onInsertUser(name:string,surname:string,email:string,password:string,phone:string,cpf:string): Observable<any>{
    const formData = new FormData();
    formData.append('name',name);
    formData.append('surname',surname);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('phone',phone);
    formData.append('cpf',cpf);

    return this.http.post<any>(`http://localhost:80/go-horse/backend/user.php`, formData);
  }

  onUpdatePassword(email:string,password:string):Observable<any>{
    const formData = new FormData();
    formData.append('email',email);
    formData.append('password',password);

    return this.http.post<any>(`http://localhost:80/go-horse/backend/recover-password.php`, formData);
  }

  getUserLogged() {
    return this.userLogged;
  }

  setUserLogged(user: any) {
    this.userLogged = user;
  }
}

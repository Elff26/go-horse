import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private onAuth = new Subject<boolean>();
  private onModal = new Subject<string>();
  private modal:{Title:string,Description:string} = {Title:"",Description:""};
  logged: boolean = false;
  private description:string="";
  private title:string="";

  constructor(private http: HttpClient) { }

  getModalUpdated(){
    return this.onModal.asObservable();
  }

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

  onInsertUser(name:string,surname:string,email:string,password:string,phone:string,cpf:string):void{
    const formData = new FormData();
    formData.append('name',name);
    formData.append('surname',surname);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('phone',phone);
    formData.append('cpf',cpf);

    this.http.post<any>(`http://localhost:80/go-horse/backend/user.php`, formData).subscribe(response => {
      this.title = response.Title;
      this.onModal.next(this.title);
    });
  }

  onUpdatePassword(email:string,password:string):void{
    const formData = new FormData();
    formData.append('email',email);
    formData.append('password',password);

    this.http.post<any>(`http://localhost:80/go-horse/backend/recover-password.php`, formData).subscribe(response => {
      console.log(response);
    });
  }
}

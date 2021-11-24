import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService{

  constructor(private http: HttpClient) { }

  onSendEmail(email:string):Observable<any>{
    const formData = new FormData();
    formData.append('email',email);

    return this.http.post<any>(`http://localhost:80/go-horse/backend/email.php`,formData);
  }
}

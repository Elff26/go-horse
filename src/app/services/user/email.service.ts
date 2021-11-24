import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EmailService{

  constructor(private http: HttpClient) { }

  onSendEmail(email:string):void{
    const formData = new FormData();
    formData.append('email',email);

    this.http.post<any>(`http://localhost:80/go-horse/backend/email.php`,formData).subscribe(response =>{
      console.log(response);
    })
  }
}

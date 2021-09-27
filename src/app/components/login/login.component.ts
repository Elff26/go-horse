import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../app.component.css']
})
export class LoginComponent implements OnInit {

  clicked: boolean = false;
  pageForm: FormGroup = new FormGroup({});

  constructor(private userService: UserService, private route: Router, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.userService.onLogin();
    this.route.navigate(['home']);
  }

  onClicked(){
    this.clicked = true;
  }

  onNotClicked(){
    this.clicked = false;
  }

  createForm(){

    this.pageForm = this.fb.group({
      Name: ['', Validators.required],
      Surname: ['', Validators.required],
      Email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password: ['', [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$")]],
      PasswordConfirm: ['', [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$")]],
      CPF: ['', [Validators.required, Validators.pattern("^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$")]],
      Phone: ['', [Validators.required, Validators.pattern("^[0-9]{2}[0-9]{4,5}-[0-9]{4}$")]]
    });
  }
}

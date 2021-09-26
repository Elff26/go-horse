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

  constructor(private userService: UserService, private route: Router) {}

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
}

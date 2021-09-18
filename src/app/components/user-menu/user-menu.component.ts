import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css', '../../app.component.css']
})
export class UserMenuComponent implements OnInit {

  logged: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    this.logged = true;
  }

  onLogout() {
    this.logged = false;
  }

}

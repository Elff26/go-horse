import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../app.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  onSearch() {
    this.router.navigate(['search']);
  }

  gotoHome() {
    this.router.navigate(['home']);
  }
}

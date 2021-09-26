import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../app.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  onSearch(): void {
    this.router.navigate(['search']);
  }

  gotoHome(): void {
    this.router.navigate(['home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css', '../../app.component.css']
})
export class UserMenuComponent implements OnInit {
  private authSubscription: Subscription = Subscription.EMPTY;
  logged: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.logged = this.userService.getAuth();

    this.authSubscription = this.userService.getAuthUpdated().subscribe((status) => {
      this.logged = status;
    });
  }

  onLogout(): void {
    this.userService.onLogout();
  }
}

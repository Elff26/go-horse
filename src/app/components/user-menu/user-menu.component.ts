import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css', '../../app.component.css']
})
export class UserMenuComponent implements OnInit, OnDestroy {
  private authSubscription: Subscription = Subscription.EMPTY;
  logged: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')) {
      this.userService.setAuth(true);
      
      this.userService.setUserLogged(JSON.parse(localStorage.getItem('user') || '{}'));
    }

    this.logged = this.userService.getAuth();

    this.authSubscription = this.userService.getAuthUpdated().subscribe((status) => {
      this.logged = status;
    });
  }

  onLogout(): void {
    this.userService.onLogout();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}

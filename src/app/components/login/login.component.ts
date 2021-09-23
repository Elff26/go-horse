import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../app.component.css']
})
export class LoginComponent implements OnInit {

  clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(){
    this.clicked = true;
  }

  onNotClicked(){
    this.clicked = true;
  }
}

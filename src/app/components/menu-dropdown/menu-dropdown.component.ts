import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.css']
})
export class MenuDropdownComponent implements OnInit {
  @Input() subcategories: { subcategory: string, link: string }[] = [];
  @Input() category: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

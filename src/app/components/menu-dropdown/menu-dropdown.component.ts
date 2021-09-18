import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.css']
})
export class MenuDropdownComponent implements OnInit {
  @Input() subcategorias: { subcategoria: string, link: string }[] = [];
  @Input() categoria: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

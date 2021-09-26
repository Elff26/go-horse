import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html',
  styleUrls: ['./menu-dropdown.component.css']
})
export class MenuDropdownComponent implements OnInit {
  @Input() subcategories: { subcategory: string }[] = [];
  @Input() category: string = "";

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSearch(subcategorie: string): void {
    this.productService.onSearch(subcategorie);
  }

}

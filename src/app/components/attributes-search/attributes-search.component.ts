import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-attributes-search',
  templateUrl: './attributes-search.component.html',
  styleUrls: ['./attributes-search.component.css']
})
export class AttributesSearchComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onChangeOrder(order: string) {
    this.productService.onChangeOrder(order);
  }

}

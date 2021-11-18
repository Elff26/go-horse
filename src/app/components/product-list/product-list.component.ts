import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', '../../app.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  private productsSubscription: Subscription = Subscription.EMPTY;
  products: [] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.onChangeOrder('');
    this.productService.onSearch('');

    this.productsSubscription = this.productService.getProductsUpdated().subscribe(products => {
      this.products = products;
    });
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css', '../../app.component.css']
})
export class ProductSearchComponent implements OnInit, OnDestroy {
  private productsSubscription: Subscription = Subscription.EMPTY;
  products = [];
  totalRows = 0;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsSubscription = this.productService.getProductsUpdated().subscribe(products => {
      this.totalRows = this.productService.getTotalRows();
      this.products = products;
    });
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }
}

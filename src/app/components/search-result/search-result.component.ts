import { Component, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css', '../../app.component.css']
})
export class SearchResultComponent implements OnInit, OnChanges {
  private searchedSubscription: Subscription = Subscription.EMPTY;
  searched: string = "";

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.searched = this.productService.getSearched();

    this.searchedSubscription = this.productService.getSearchedUpdated().subscribe((searched) => {
      this.searched = searched;
    });
  }
  
  ngOnChanges(): void {
    this.searched = this.productService.getSearched();
  }

}

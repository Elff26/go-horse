import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css', '../../app.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy {
  private searchedSubscription: Subscription = Subscription.EMPTY;
  searched: string = "";
  @Input() totalRows: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.searched = this.productService.getSearched();
    this.productService.onSearch(this.searched);

    this.searchedSubscription = this.productService.getSearchedUpdated().subscribe(searched => {
      this.searched = searched;
    });
  }

  ngOnDestroy() {
    this.searchedSubscription.unsubscribe();
  }
}

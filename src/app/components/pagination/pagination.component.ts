import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {
  private pagesSubscription: Subscription = Subscription.EMPTY;
  public totalPages: number[] = []
  public currentPage: number = 1;

  @Input() public pageUrl: string = '';

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pagesSubscription = this.productService.getPagesUpdated().subscribe(pages => {
      this.currentPage = this.productService.getCurrentPage();
      this.totalPages = Array.from(Array(pages).keys());
    });
  }

  onChangePage(page: number) {
    this.currentPage = page;

    this.productService.onChangePage(page);
  }

  onNext() {
    this.productService.onChangePage(++this.currentPage);
  }

  onPrevious() {
    this.productService.onChangePage(--this.currentPage);
  }

  ngOnDestroy() {
    this.pagesSubscription.unsubscribe();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private onSearched = new Subject<string>();
  private onProducts = new Subject<[]>();
  private onPages = new Subject<number>();

  private searched: string = "";
  private order: string = "";
  private products: [] = [];
  private currentPage: number = 1;
  private totalRows: number = 0;
  private pages: number = 0;

  constructor(private http: HttpClient) { }

  onSearch(searched: string): void {
    const formData = new FormData();
    formData.append('searched', searched);
    formData.append('order', this.order);

    this.searched = searched;
    this.onSearched.next(this.searched);
    
    this.http.post<any>(`http://localhost:80/go-horse/backend/products.php?page=${this.currentPage}`, formData).subscribe(response => {
      this.products = response.products;
      this.totalRows = response.rows['COUNT(*)'];
      this.pages = Math.ceil(this.totalRows / 10);
      
      this.onPages.next(this.pages);
      this.onProducts.next(this.products);
    });
  }

  onChangePage(page: number) {
    this.currentPage = page;

    this.onSearch(this.searched);
  }

  onChangeOrder(order: string) {
    this.order = order;

    this.onSearch(this.searched);
  }

  getPages(): number {
    return this.pages;
  }

  getCurrentPage(): number {
    return this.currentPage;
  } 

  getTotalRows(): number {
    return this.totalRows;
  }

  getPagesUpdated() {
    return this.onPages.asObservable();
  }

  getSearched(): string {
    return this.searched;
  }

  getSearchedUpdated() {
    return this.onSearched.asObservable();
  }

  getProducts(): any {
    return this.products;
  }

  getProductsUpdated() {
    return this.onProducts.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private onSearched = new Subject<string>();
  searched: string = "";

  constructor() { }

  onSearch(searched: string): void {
    this.searched = searched;

    this.onSearched.next(searched);
  }

  getSearched(): string {
    return this.searched;
  }

  getSearchedUpdated() {
    return this.onSearched.asObservable();
  }
}

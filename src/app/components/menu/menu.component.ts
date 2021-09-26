import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories: any = null;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categories = this.categoriesService.getCategories();
  }

}

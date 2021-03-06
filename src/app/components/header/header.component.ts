import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../app.component.css']
})
export class HeaderComponent {
  searched: string = "";
  
  constructor(private router: Router, 
              private productService: ProductService) { }

  onSearch(): void {

    this.productService.onChangePage(1);
    
    this.productService.onSearch(this.searched);

    this.router.navigate(['search']);
  }

  gotoHome(): void {
    this.productService.onChangePage(1);
    
    this.router.navigate(['home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CarService } from 'src/app/services/car/car.service';
import { ProductService } from 'src/app/services/product/product.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css', '../../app.component.css']
})
export class ProductDetailComponent implements OnInit {

  private userLogged: any;
  private codigo: any; 
  public product: any;
  public quantidade: number = 1;

  constructor(private route: ActivatedRoute, 
              private productService: ProductService, 
              private carService: CarService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userLogged = this.userService.getUserLogged();

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('codigo')) {
        this.codigo = paramMap.get('codigo');
        let products = this.productService.getProducts();
        this.product = products.filter((prod:any) => prod.codigo == this.codigo)[0];
      }
    });
  }

  insertProduct() {
    if(this.userLogged.codigo) {
      this.carService.onInsertProduct(this.userLogged.codigo, this.product, this.quantidade);

      this.router.navigate(['my-car']);
    } else {
      this.router.navigate(['login']);
    }
    
  }
}

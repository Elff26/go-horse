import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css', '../../app.component.css']
})
export class ProductDetailComponent implements OnInit {

  private codigo : any; 
  public product : any;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('codigo')) {
        this.codigo = paramMap.get('codigo');
        let products = this.productService.getProducts();
        this.product = products.filter((prod:any) => prod.codigo == this.codigo)[0];
      }
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarService } from 'src/app/services/car/car.service';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-my-car',
  templateUrl: './my-car.component.html',
  styleUrls: ['./my-car.component.css', '../../app.component.css']
})
export class MyCarComponent implements OnInit {
  private carSubscription: Subscription = Subscription.EMPTY;
  public products: any = [];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.onGetProducts(1);

    this.carSubscription = this.carService.getCarProductsUpdated().subscribe(products => {
      this.products = products;
    });
  }

  onClick(info: Modal){
    info.title = "Sucesso",
    info.description = "Você finalizou sua compra! Nós encaminharemos um email com a confirmação da sua compra e falando sobre os próximos passos.",
    info.textButton = "Okay",
    info.href = "/"
  }

  onDeleteProduct(id: number) {
    this.carService.onRemoveProduct(id);
  }
}

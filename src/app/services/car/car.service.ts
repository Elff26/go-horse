import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private onCarProducts = new Subject<any[]>();
  private carProducts: any[] = [];

  constructor(private http: HttpClient) { }

  onInsertProduct(product: any, quantidade: number) {
    const formData = new FormData();
    formData.append('productId', product.codigo.toString());
    formData.append('price', product.valor.toString());
    formData.append('quantity', quantidade.toString());

    this.http.post<any>(`http://localhost:80/go-horse/backend/car.php`, formData).subscribe((res) => {
      this.onCarProducts.next([...this.carProducts, { 
        codigoProduto: product.codigo, 
        quantidade: quantidade, 
        valorTotal: quantidade * Number(product.valor),
        valorUnitario: product.valor
      }]);
    });
  }

  onRemoveProduct(id: number) {
    this.http.delete<any>(`http://localhost:80/go-horse/backend/car.php?id=${id}`).subscribe((res) => {
      this.carProducts = this.carProducts.filter((product) => product.codigoProduto !== id);
      this.onCarProducts.next([...this.carProducts]);
    });
  }

  onGetProducts(id: number) {
    this.http.get<any>(`http://localhost:80/go-horse/backend/car.php?id=${id}`).subscribe((res) => {
      console.log(res);
      this.carProducts = res;
      this.onCarProducts.next(res);
    });
  }

  getCarProductsUpdated() {
    return this.onCarProducts.asObservable();
  }
}

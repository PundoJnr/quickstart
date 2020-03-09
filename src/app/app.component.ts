import { Component } from '@angular/core';
import { IProduct } from "./products";
import { ProductService } from "./products.service";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/observable';
// import { appService } from "./app.service";
import 'rxjs/add/operator/map';
@Component({
  selector: 'my-app',
  templateUrl: `
  <ul>
  <li><a [routerLink] = "['/Product']">Product</a></li>
  <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
  </ul> 
  <router-outlet></router-outlet> 
  `
  ,
  providers: [ProductService]
})
export class AppComponent {
  iproducts: IProduct[];
  constructor(private _product: ProductService) {

  }

  ngOnInit(): void {
    this._product.getProducts()
      .subscribe(iproducts => this.iproducts = iproducts);
  }

}

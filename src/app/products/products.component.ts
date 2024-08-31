import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


public products:any=[];

constructor(private _productsService:ProductService){

  _productsService.getProducts().subscribe(
    (data:any)=>{
      this.products=data;
    }
    ,
    (err:any)=>{
      alert("Internal Server Error")
    }
  )

}

}

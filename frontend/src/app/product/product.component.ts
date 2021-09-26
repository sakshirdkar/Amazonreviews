import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }
  // getProducts(){
  //   this.productService.getProducts().subscribe(response =>{
  //     this.products = response
  //   })
  // }
}

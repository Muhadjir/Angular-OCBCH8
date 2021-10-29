import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // products: any[] = [
  //   { id: 1, code: "MD001", name: "Mouse Desktop MD001", price: 100 },
  //   { id: 2, code: "KD001", name: "Keyboard Desktop KD001", price: 110 },
  //   { id: 3, code: "MP001", name: "MousePad MP001", price: 10 },
  //   { id: 4, code: "MD002", name: "Mouse Desktop Extra MD002", price: 200 },
  //   { id: 5, code: "MD003", name: "Mouse Desktop Ultra MD003", price: 1000 },
  // ]
  products:Product[]=[]
  // products = [
  //   {
  //     id:"ABC98767580",
  //     name: "Tshirt",
  //     desc: "Lorem Ipsum dolor sit amet"
  //   },
  //   {
  //     id:"DEF35660180",
  //     name: "Sweater",
  //     desc: "Lorem Ipsum dolor sit amet"
  //   },
  //   {
  //     id:"GHI21567097",
  //     name: "Jacket",
  //     desc: "Lorem Ipsum dolor sit amet"
  //   },
  //   {
  //     id:"JKL65798102",
  //     name: "Longsleeve",
  //     desc: "Lorem Ipsum dolor sit amet"
  //   }
  // ]
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.productService
      .getProducts()
      .subscribe(products => this.products=products)
  }

}

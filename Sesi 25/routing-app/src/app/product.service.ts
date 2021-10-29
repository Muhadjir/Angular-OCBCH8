import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-product';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = of(PRODUCTS)
  constructor() { }
  getProducts():Observable<Product[]>{
    // console.log("fetch list of products...")
    return this.products
  }

  getOneProduct(id:number):Observable<Product>{
    // const products = of(PRODUCTS)
    // console.log("fetch list of products...")
    // return products
    // let product:Product
    // this.getProducts().subscribe(
    //   products => product = products.find(p=> p.id === id)!
    // )
    // return product!
    return this.products.pipe(map(products => products.filter(product => product.id == id)[0]))

  }

}

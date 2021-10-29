import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
// export class ProductDetailComponent{
  export class ProductDetailComponent implements OnInit{

  product: Product = {} as Product;
  product_id: number
  // constructor(private actRoute: ActivatedRoute) {
    constructor(private actRoute: ActivatedRoute, private productService: ProductService) {
    this.product_id = this.actRoute.snapshot.params.id
  }
  
  ngOnInit(): void {
    this.getProduct(this.product_id)
}

getProduct(id:number): void {
    // this.x = this.route.snapshot.paramMap.get('name');
    // this.product_id = this.actRoute.snapshot.params.id
    this.productService.getOneProduct(id).subscribe(p => this.product = p);
}

  

}

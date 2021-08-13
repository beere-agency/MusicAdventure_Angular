import { Component, OnInit } from '@angular/core';
import { productDTO } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products!: productDTO[];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.productService.get().subscribe(products => {
      this.products = products;
    });
  }
}

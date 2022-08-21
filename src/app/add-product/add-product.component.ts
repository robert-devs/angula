import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../interface';
import { LoggerServices } from '../Logger.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0,
    url: '',
    description: '',
    inStock: true,
    sellingArt: 250,
  };
  id!: number;
  update = false;
  // @Output() addProduct = new EventEmitter<Product>();
  constructor(private productServices: ProductService) {
    this.productServices.updateId.subscribe((value: number) => {
      this.id = value;
      this.product = this.productServices.getOneProduct(value);
      this.update = true;
    });
  }

  ngOnInit(): void {}
  onAdd() {
    if (this.update) {
      this.productServices.addProduct(this.product);
      this.product = {
        name: '',
        price: 0,
        url: '',
        description: '',
        inStock: true,
        sellingArt: 250,
      };
    }
    this.productServices.upDate(this.id, this.product);
    this.update = false;
    this.product = {
      name: '',
      price: 0,
      url: '',
      description: '',
      inStock: true,
      sellingArt: 250,
    };
  }
}

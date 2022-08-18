import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  name = '';
  url = '';
  price = 0;

  @Output() addProduct = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}
  onAdd() {
    this.addProduct.emit({
      name: this.name,
      price: this.price,
      inStock: true,
      url: this.url,
      description: 'Here is your description',
      sellingArt: this.price * 0.8,
    });
  }
}

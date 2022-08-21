import { NodeWithI18n, ThisReceiver } from '@angular/compiler';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../interface';
import { LoggerServices } from '../Logger.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  date = new Date();

  filter = '';

  constructor(
    private LoggerServices: LoggerServices,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.products = this.productService.getProduct();
  }

  // day = new Date().getDate();
  getDiscount(price: number, sellingArt: number) {
    const diff = price - sellingArt;
    return diff / sellingArt;
  }

  onDelete(index: number) {
    this.productService.deleteProduct(index);
  }
  onUpdate(index: number) {
    this.productService.updateId.emit(index);
  }
}

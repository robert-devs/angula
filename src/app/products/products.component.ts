import { NodeWithI18n } from '@angular/compiler';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input('product') products!: Product[];
  company = 'The Jitu Company';
  date = new Date();

  filter = '';
  // comany = 'The Jitu';

  day = new Date().getDate();
  getDiscount(price: number, sellingArt: number) {
    const diff = price - sellingArt;
    return diff / sellingArt;
  }
}

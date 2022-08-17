import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'laptop',
      price: 300,
      url: 'https://cdn.mos.cms.futurecdn.net/UEEkgUpRTeWcwpGaYpPJES.jpg',
      inStock: true,
      sellingArt: 250,
      description: 'lorem 20',
    },
    {
      name: 'desktop',
      price: 300,
      url: 'https://wain.co.ke/wp-content/uploads/2022/01/hp-desktop-500x500-1.jpg',
      inStock: true,
      sellingArt: 250,
      description: 'lorem 20',
    },
    {
      name: 'harddisk',
      price: 300,
      url: 'https://www.minitool.com/images/uploads/lib/2019/06/external-hard-disk/external-hard-disk-1.png',
      inStock: false,
      sellingArt: 250,
      description: 'lorem 20',
    },
    {
      name: 'flashdisk',
      price: 300,
      url: 'https://media.wired.com/photos/61807b2c0a8c81dc526e006b/191:100/w_2580,c_limit/Gear-Lexar_Jumpdrive_F35_SOURCE_Lexar.jpg',
      inStock: true,
      sellingArt: 250,
      description: 'lorem 20',
    },
    {
      name: 'mouse',
      price: 300,
      url: 'https://es.thermaltake.com/media/catalog/product/cache/023a745bb14092c479b288481f91a1bd/l/2/l20m01.jpg',
      inStock: false,
      sellingArt: 250,
      description: 'lorem 20',
    },
    {
      name: 'keyboard',
      price: 300,
      url: 'https://m.media-amazon.com/images/I/61vjNMgYGLL._AC_SL1500_.jpg',
      inStock: true,
      sellingArt: 250,
      description: 'lorem20',
    },
    {
      name: 'router',
      price: 300,
      url: 'https://dlcdnwebimgs.asus.com/gain/a3631a89-05a9-48ea-8e71-ef4082a73058/w800',
      inStock: true,
      sellingArt: 250,
      description: 'lorem 20',
    },
  ];
  company = 'The Jitu Company';
  date = new Date();
  name = '';
  url = '';
  price = 0;
  filter = '';

  onAdd() {
    this.products.push({
      name: this.name,
      url: this.url,
      price: this.price,
      inStock: true,
      sellingArt: 250,
      description: 'lorem 20',
    });
  }
  day = new Date().getDate();
}

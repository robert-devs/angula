import { EventEmitter, Injectable } from '@angular/core';

import { Product } from './interface';
import { LoggerServices } from './Logger.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private logger: LoggerServices) {}
  private products: Product[] = [
    {
      name: 'laptop',
      price: 300,
      url: 'https://cdn.mos.cms.futurecdn.net/UEEkgUpRTeWcwpGaYpPJES.jpg',
      inStock: true,
      sellingArt: 250,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      name: 'desktop',
      price: 300,
      url: 'https://wain.co.ke/wp-content/uploads/2022/01/hp-desktop-500x500-1.jpg',
      inStock: true,
      sellingArt: 250,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      name: 'harddisk',
      price: 300,
      url: 'https://www.minitool.com/images/uploads/lib/2019/06/external-hard-disk/external-hard-disk-1.png',
      inStock: false,
      sellingArt: 250,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      name: 'flashdisk',
      price: 300,
      url: 'https://media.wired.com/photos/61807b2c0a8c81dc526e006b/191:100/w_2580,c_limit/Gear-Lexar_Jumpdrive_F35_SOURCE_Lexar.jpg',
      inStock: true,
      sellingArt: 250,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      name: 'mouse',
      price: 300,
      url: 'https://es.thermaltake.com/media/catalog/product/cache/023a745bb14092c479b288481f91a1bd/l/2/l20m01.jpg',
      inStock: false,
      sellingArt: 250,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      name: 'keyboard',
      price: 300,
      url: 'https://m.media-amazon.com/images/I/61vjNMgYGLL._AC_SL1500_.jpg',
      inStock: true,
      sellingArt: 250,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      name: 'router',
      price: 300,
      url: 'https://dlcdnwebimgs.asus.com/gain/a3631a89-05a9-48ea-8e71-ef4082a73058/w800',
      inStock: true,
      sellingArt: 250,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ];
  onAdd(products: Product) {
    this.products.push(products);
  }

  updateId = new EventEmitter<number>();

  getProduct() {
    return this.products;
  }
  getOneProduct(index: number) {
    return this.products[index];
  }
  upDate(index: number, updatedProduct: Product) {
    this.products[index] = updatedProduct;
  }
  deleteProduct(index: number) {
    return this.products.splice(index, 1);
  }
  addProduct(newProduct: Product) {
    this.logger.log(newProduct.name);
    this.products.push(newProduct);
  }
}

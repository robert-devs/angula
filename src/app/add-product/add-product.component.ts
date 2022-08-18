import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  name = '';
  url = '';
  price = 0;
  constructor() {}

  ngOnInit(): void {}
  onAdd() {}
}

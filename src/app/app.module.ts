import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReversePipe } from 'src/PIPES/Reverse';
import { ShortenPipe } from 'src/PIPES/Shorten';
import { AddProductComponent } from './add-product/add-product.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearcPipe } from '../PIPES/searc.pipe';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    ReversePipe,
    HeaderComponent,
    ProductsComponent,

    SearcPipe,
    AddProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

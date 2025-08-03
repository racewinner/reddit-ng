import { Component, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Article } from './article/article';
import { ArticleModel } from './article/article.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-reddit');
  product: Product;

  constructor() {
    let newProduct = new Product(
      "NICEHAT",
      "ANice Black Hat",
      "/resources/images/products/black-hat.jpg",
      ["Men", "Accessories","Hats"],
      29.99
    );

    this.product = newProduct
  }
}

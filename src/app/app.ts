import { 
  Component, 
  EventEmitter,
  signal, 
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Article } from './article/article';
import { ArticleModel } from './article/article.model';
import { Product } from './product.model';
import { ProductsList } from './products-list/products-list';
@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-reddit');
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        "NICEHAT",
        "ANice Black Hat",
        "/resources/images/products/black-hat.jpg",
        ["Men", "Accessories","Hats"],
        29.99
      ),
      new Product(
        "NICEHAT",
        "ANice Black Hat",
        "/resources/images/products/black-hat.jpg",
        ["Men", "Accessories","Hats"],
        29.99
      ),
      new Product(
        "NICEHAT",
        "ANice Black Hat",
        "/resources/images/products/black-hat.jpg",
        ["Men", "Accessories","Hats"],
        29.99
      ),
      new Product(
        "NICEHAT",
        "ANice Black Hat",
        "/resources/images/products/black-hat.jpg",
        ["Men", "Accessories","Hats"],
        29.99
      ),
    ]
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product)
  }
}

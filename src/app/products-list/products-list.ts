import { 
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../product.model';
import { ProductRow } from '../product-row/product-row';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ProductRow],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss'
})
export class ProductsList implements OnInit {
  @Input() productList: Product[] = [];
  @Output() onProductSelected:EventEmitter<Product> = new EventEmitter<Product>();

  private currentProduct: Product | undefined;

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  ngOnInit(): void {
    debugger
  }

  isSelected(product:Product): boolean {
    if(!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}

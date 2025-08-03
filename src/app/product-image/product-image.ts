import { 
  Component,
  Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-image',
  imports: [],
  templateUrl: './product-image.html',
  styleUrl: './product-image.scss'
})
export class ProductImage {
  @Input() product: Product | undefined
}

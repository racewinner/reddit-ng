import { 
  Component,
  Input,
  HostBinding
} from '@angular/core';
import { Product } from '../product.model'; 
import { ProductImage } from '../product-image/product-image';
import { ProductDepartment } from '../product-department/product-department';
import { PriceDisplay } from '../price-display/price-display';

@Component({
  selector: 'app-product-row',
  imports: [ProductImage, ProductDepartment, PriceDisplay],
  templateUrl: './product-row.html',
  styleUrl: './product-row.scss'
})
export class ProductRow {
  @Input() product: Product = new Product("", "", "", [], 0);
  @HostBinding('attr.class') cssClass = 'item'
}

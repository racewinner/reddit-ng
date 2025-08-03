import { 
  Component,
  Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-department',
  imports: [],
  templateUrl: './product-department.html',
  styleUrl: './product-department.scss'
})
export class ProductDepartment {
  @Input() product: Product | undefined
}

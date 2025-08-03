import { 
  Component,
Input } from '@angular/core';

@Component({
  selector: 'app-price-display',
  imports: [],
  templateUrl: './price-display.html',
  styleUrl: './price-display.scss'
})
export class PriceDisplay {
  @Input() price: number = 0;
}

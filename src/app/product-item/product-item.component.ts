import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() item: any;

  incrementLikes() {
    this.item.likes++;
  }

  removeItem() {
    this.item.hidden = true;
  }
}

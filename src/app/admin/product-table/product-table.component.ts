import { Component, OnInit } from '@angular/core';
import {ProductRepository} from '../../model/product.repository';
import {Product} from '../../model/product.model';
import {HighlightTrigger} from '../../store/table.animation';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
  animations: [HighlightTrigger]
})
export class ProductTableComponent implements OnInit {

  constructor(private repository: ProductRepository) { }

  ngOnInit() {
  }
  getProducts(): Product[] {
    return this.repository.getProducts();
  }
  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }

  get categories(): string[] {
    return this.repository.getProducts()
      .map(p => p.category)
      .filter((category, index, array) => array.indexOf(category) == index);
  }

  highlightCategory: string = "";
  getRowState(category: string): string {
    return this.highlightCategory == "" ? "" :
      this.highlightCategory == category ? "selected" : "notselected";
  }
}

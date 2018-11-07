import {Injectable, OnInit} from '@angular/core';
import {Product} from './product.model';
import {RestDatasource} from './rest.datasource';

@Injectable()
export class ProductRepository implements OnInit {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSourse: RestDatasource) {
    this.dataSourse.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  ngOnInit() {
  }

  getProducts(category: string = null): Product [] {
    return this.products
      .filter(p => category == null || category == p.category);
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSourse.saveProduct(product)
        .subscribe((p: any) => this.products.push(p));
    } else {
      this.dataSourse.updateProduct(product)
        .subscribe(p => {
          this.products.splice(this.products.findIndex(p => p.id == product.id), 1, product);
        });
    }
  }

  deleteProduct(id: number) {
    this.dataSourse.deleteProduct(id).subscribe(p => {
      this.products.splice(this.products.findIndex(p => p.id == id), 1);
    });
  }
}

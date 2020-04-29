import { ProductListComponent } from '../app/product-list/product-list.component';
import { products } from '../app/products';

describe('ProductListComponent', () => {
    it('List should have products', () => {
      const comp = new ProductListComponent();
      expect(comp).toBeTruthy();
      expect(comp.products).toBe(products)
    })
})
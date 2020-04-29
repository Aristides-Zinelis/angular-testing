import { ProductAlertsComponent } from '../app/product-alerts/product-alerts.component'

describe('ProductAlertsComponent', () => {
    it('raises the selected event when clicked', () => {
      const comp = new ProductAlertsComponent();
      const productMock = {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
      }
      comp.product = productMock;


      comp.notify.subscribe((selctedProduct) => expect(selctedProduct).toBe(productMock));
      comp.clicked(productMock);
    })
})
import { async, inject, ComponentFixture, TestBed, tick, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { ShippingComponent } from "src/app/shipping/shipping.component";
import { CartService } from 'src/app/cart.service';
import { MockCartService } from "./mocks/mock-cart-service";

describe('ShippingComponent', ()=>{
    let comp;
    let cartService;

    beforeEach(() => {
        TestBed.configureTestingModule({
          // provide the component-under-test and dependent service
          providers: [
            ShippingComponent,
            { provide: CartService, useClass: MockCartService }
          ]
        });
    
        comp = TestBed.inject(ShippingComponent);
        cartService = TestBed.inject(CartService);

    })

    it('should create component', () => {
    expect(comp.shippingCosts).toBeUndefined();
    })

    // fakeAsync es para dar tiempo a los servicios  
    it('should create component', fakeAsync(() => {
        let shippingPrices = cartService.getShippingPrices();
        comp.ngOnInit();
        // tick(50000);
        // flushMicrotasks(); 
        expect(comp.shippingCosts).toEqual(shippingPrices);
    }))

})
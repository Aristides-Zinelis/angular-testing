import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms'
import { CartComponent } from 'src/app/cart/cart.component';
import { CartService } from 'src/app/cart.service';
import { By } from '@angular/platform-browser';

describe('CartComponent', ()=>{
    let comp: CartComponent;
    let mockCartService: CartService;
    let fixture: ComponentFixture<CartComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, ReactiveFormsModule],
            declarations: [ CartComponent ],
            providers:[ CartService ]
        });
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(CartComponent);
        comp = fixture.componentInstance;
        mockCartService = TestBed.get(CartService)
    })
    
    it('should create component', () => {
        expect(comp).toBeTruthy();
        expect(comp.items).toEqual(undefined);
    });
    it('should onInit load itmes from service', () => {
        const cartServiceSpy = spyOn(mockCartService, 'getItems').and.callThrough();
        expect(cartServiceSpy).not.toHaveBeenCalled();
        comp.ngOnInit()
        expect(cartServiceSpy).toHaveBeenCalled();
        expect(cartServiceSpy.calls.all().length).toEqual(1);
        expect(comp.items).not.toEqual(undefined);
        expect(comp.checkoutForm).toBeTruthy();
    });
    it('should be redered right', ()=>{
        const bannerElement: HTMLElement = fixture.nativeElement;
        const button = bannerElement.querySelector('.button');
        expect(button).toBeTruthy();
        expect(button.textContent).toBe('Purchase');
    })
})
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
        // Configura y inicia el entorno para las pruebas unitarias
        // y proporciona métodos para la creación de componentes 
        // y servicios en las pruebas unitarias 
        // https://angular.io/api/core/testing/TestBed
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, ReactiveFormsModule],
            declarations: [ CartComponent ],
            providers:[ CartService ]
        });
    })

    beforeEach(() => {
        // Creación de componente y inyecciones de servicios,
        // para que funcione todos lo servicios que usamos en el componente
        // tienen que inyectarse aquí.
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
    it('should be reder the form', ()=>{
        const form: HTMLElement = fixture.nativeElement;
        const fields = form.querySelectorAll('input');
        const button = form.querySelector('.button');
        expect(fields.length).toBe(2);
        expect(button).toBeTruthy();
        expect(button.textContent).toBe('Purchase');
    })
})
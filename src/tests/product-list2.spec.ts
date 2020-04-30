import { ProductListComponent } from '../app/product-list/product-list.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('ProductListComponent', () => {
  let comp: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  @Component({selector: 'app-product-alerts', template: ''})
     class  ProductAlertsStubComponent{}

     beforeEach(()=>{
      
      TestBed.configureTestingModule({
        declarations: [
          ProductListComponent,
          ProductAlertsStubComponent
        ],
        schemas: [ NO_ERRORS_SCHEMA ]
      })
      fixture = TestBed.createComponent(ProductListComponent);
      comp = fixture.componentInstance;
  })

    it('Should render ProductAlertsComponent', () => {
      fixture.detectChanges();
      let appproductalerts = fixture.nativeElement.querySelector('app-product-alerts');
      expect(comp).toBeTruthy();
      expect(appproductalerts).toBeTruthy();

    })
})
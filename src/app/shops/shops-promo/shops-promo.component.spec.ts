import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsPromoComponent } from './shops-promo.component';

describe('ShopsPromoComponent', () => {
  let component: ShopsPromoComponent;
  let fixture: ComponentFixture<ShopsPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopsPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

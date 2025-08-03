import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDepartment } from './product-department';

describe('ProductDepartment', () => {
  let component: ProductDepartment;
  let fixture: ComponentFixture<ProductDepartment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDepartment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDepartment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaproductosComponent } from './categoriaproductos.component';

describe('CategoriaproductosComponent', () => {
  let component: CategoriaproductosComponent;
  let fixture: ComponentFixture<CategoriaproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriaproductosComponent]
    });
    fixture = TestBed.createComponent(CategoriaproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensGaleriaComponent } from './itens-galeria.component';

describe('ItensGaleriaComponent', () => {
  let component: ItensGaleriaComponent;
  let fixture: ComponentFixture<ItensGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensGaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

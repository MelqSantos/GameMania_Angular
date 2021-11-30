import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDestaqueComponent } from './item-destaque.component';

describe('ItemDestaqueComponent', () => {
  let component: ItemDestaqueComponent;
  let fixture: ComponentFixture<ItemDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDestaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

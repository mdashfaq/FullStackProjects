import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDashComponent } from './order-dash.component';

describe('OrderDashComponent', () => {
  let component: OrderDashComponent;
  let fixture: ComponentFixture<OrderDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

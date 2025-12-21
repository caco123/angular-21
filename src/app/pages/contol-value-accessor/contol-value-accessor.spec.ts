import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContolValueAccessor } from './contol-value-accessor';

describe('ContolValueAccessor', () => {
  let component: ContolValueAccessor;
  let fixture: ComponentFixture<ContolValueAccessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContolValueAccessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContolValueAccessor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

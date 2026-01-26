import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomField } from './custom-field';

describe('CustomField', () => {
  let component: CustomField;
  let fixture: ComponentFixture<CustomField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inteceptors } from './inteceptors';

describe('Inteceptors', () => {
  let component: Inteceptors;
  let fixture: ComponentFixture<Inteceptors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inteceptors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inteceptors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

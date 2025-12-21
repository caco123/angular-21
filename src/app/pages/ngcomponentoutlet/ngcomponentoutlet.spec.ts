import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngcomponentoutlet } from './ngcomponentoutlet';

describe('Ngcomponentoutlet', () => {
  let component: Ngcomponentoutlet;
  let fixture: ComponentFixture<Ngcomponentoutlet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngcomponentoutlet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngcomponentoutlet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

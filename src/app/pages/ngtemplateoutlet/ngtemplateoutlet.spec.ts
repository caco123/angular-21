import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngtemplateoutlet } from './ngtemplateoutlet';

describe('Ngtemplateoutlet', () => {
  let component: Ngtemplateoutlet;
  let fixture: ComponentFixture<Ngtemplateoutlet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngtemplateoutlet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngtemplateoutlet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

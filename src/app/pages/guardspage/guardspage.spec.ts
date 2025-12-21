import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Guardspage } from './guardspage';

describe('Guardspage', () => {
  let component: Guardspage;
  let fixture: ComponentFixture<Guardspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Guardspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Guardspage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

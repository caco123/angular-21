import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPage } from './rxjs-page';

describe('Rxjs', () => {
  let component: RxjsPage;
  let fixture: ComponentFixture<RxjsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsPage]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RxjsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

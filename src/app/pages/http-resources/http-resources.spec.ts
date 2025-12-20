import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpResources } from './http-resources';

describe('HttpResources', () => {
  let component: HttpResources;
  let fixture: ComponentFixture<HttpResources>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpResources]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpResources);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContainerRefChildComponent } from './view-container-ref-child-component';

describe('ViewContainerRefChildComponent', () => {
  let component: ViewContainerRefChildComponent;
  let fixture: ComponentFixture<ViewContainerRefChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewContainerRefChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContainerRefChildComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

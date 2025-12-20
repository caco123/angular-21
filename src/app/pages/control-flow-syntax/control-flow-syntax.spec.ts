import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowSyntax } from './control-flow-syntax';

describe('ControlFlowSyntax', () => {
  let component: ControlFlowSyntax;
  let fixture: ComponentFixture<ControlFlowSyntax>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowSyntax]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowSyntax);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

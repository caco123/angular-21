import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { formDirtyGuard } from './form-dirty-guard';

describe('formDirtyGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formDirtyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

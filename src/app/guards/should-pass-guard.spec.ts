import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { shouldPassGuard } from './should-pass-guard';

describe('shouldPassGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => shouldPassGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { CanDeactivateFn } from '@angular/router';
import { FormDirtyGuardInterface } from '../pages/guardspage/guardspage';

export const formDirtyGuard: CanDeactivateFn<FormDirtyGuardInterface> = (component) => {
  if (component.isFormDirty()) {
    return confirm('Are you sure you want to leave?');
  }
  return true;
};

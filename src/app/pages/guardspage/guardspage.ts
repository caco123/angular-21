import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-guardspage',
  imports: [ReactiveFormsModule],
  templateUrl: './guardspage.html',
  styleUrl: './guardspage.scss',
})
export class Guardspage implements FormDirtyGuardInterface {
  fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    name: [''],
    email: [''],
  });

  isFormDirty(): boolean {
    return this.form.dirty;
  }
}
export interface FormDirtyGuardInterface {
  isFormDirty(): boolean;
  form: FormGroup;
}
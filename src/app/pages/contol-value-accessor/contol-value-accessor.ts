import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChildInput } from './child-input/child-input';

@Component({
  selector: 'app-contol-value-accessor',
  imports: [ReactiveFormsModule, ChildInput],
  templateUrl: './contol-value-accessor.html',
  styleUrl: './contol-value-accessor.scss',
})
export class ContolValueAccessor {
  private control = new FormControl({ value: 'Initial Value', disabled: false }, { nonNullable: true, validators: [Validators.required] });
  formGroup = new FormGroup({ name: this.control });
}
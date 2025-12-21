import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ChildInput } from './child-input/child-input';

@Component({
  selector: 'app-contol-value-accessor',
  imports: [ReactiveFormsModule, JsonPipe, ChildInput],
  templateUrl: './contol-value-accessor.html',
  styleUrl: './contol-value-accessor.scss',
})
export class ContolValueAccessor {
  control = new FormControl('Initial Value');
}

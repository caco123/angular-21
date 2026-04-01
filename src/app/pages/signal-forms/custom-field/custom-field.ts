import { Element } from '@angular/compiler';
import { Component, ElementRef, input, InputSignal, InputSignalWithTransform, model, ModelSignal, OutputRef, viewChild } from '@angular/core';
import { FieldTree, FormField, FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
  selector: 'app-custom-field',
  templateUrl: './custom-field.html',
  styleUrl: './custom-field.scss',
})

export class CustomField implements FormValueControl<string> {
  value = model<string>('');
  touched = model<boolean>(false);
  errors = input<readonly WithOptionalField<ValidationError>[]>([]);
  readOnly = input<boolean>();
  invalid = input<boolean>(false);


  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value.set(input.value ?? '');
  }
}

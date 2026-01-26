import { Element } from '@angular/compiler';
import { Component, ElementRef, input, InputSignal, InputSignalWithTransform, model, ModelSignal, OutputRef, viewChild } from '@angular/core';
import { FieldTree, FormField, FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
  selector: 'app-custom-field',
  templateUrl: './custom-field.html',
  styleUrl: './custom-field.scss',
})

//implements FormValueControl<unknown> 
export class CustomField {
  // fieldAux = viewChild.required('fieldAux', { read: ElementRef<HTMLInputElement> });

  // value = model<unknown>(null);

  // errors = input<readonly WithOptionalField<ValidationError>[]>([]);
  // touched = input<boolean>(false);
  // invalid = input<boolean>(false);

  controlAux = input<any>(undefined);

  onInput() {
    // this.value.set(this.fieldAux().nativeElement.value);
  }
}

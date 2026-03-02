import { Component, inject } from '@angular/core';
import { Child } from './child/child';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngcontent',
  imports: [Child, ReactiveFormsModule],
  templateUrl: './ngcontent.html',
  styleUrl: './ngcontent.scss',
})
export class Ngcontent {
  fb = inject(FormBuilder);

  form = this.fb.group({
    name: [],
    email: [],
    age: [],
    gender: [],
  });

  onSubmit() {
    console.log(this.form.value);
  }

}

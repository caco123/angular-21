import { ChangeDetectionStrategy, Component, effect, OnInit, signal } from '@angular/core';
import { form, required, FormField, email } from '@angular/forms/signals';
import { CustomField } from "./custom-field/custom-field";



@Component({
  selector: 'app-signal-forms',
  imports: [CustomField, FormField],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalForms {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
    exists: false,
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.password, { message: 'Password is required' });
  });


  onSubmit() {
    const credentials = this.loginModel();
    console.log('Logging in with:', credentials);
  }
}

export interface LoginData {
  email: string;
  password: string;
  exists: boolean;
}


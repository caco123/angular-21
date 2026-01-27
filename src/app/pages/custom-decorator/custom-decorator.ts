import { Component, inject, OnDestroy } from '@angular/core';
import { timer, unsubscribe, ValidateEmail } from './decorators';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-custom-decorator',
  imports: [],
  templateUrl: './custom-decorator.html',
  styleUrl: './custom-decorator.scss',
})
@unsubscribe()
export class CustomDecorator implements OnDestroy {
  private readonly httpClient = inject(HttpClient);
  unsubscribe = new Subject<void>();

  @ValidateEmail
  login(email: string): void {
    console.log(`Login con ${email}`);
  }

  personName: string | null = "User";

  toggleName(): void {
    this.personName = this.personName ? null : 'User';
  }

  @timer
  fetchData(): void {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe((data) => {
        console.log('Datos recibidos:', data);
      });
  }

  ngOnDestroy(): void { }
}

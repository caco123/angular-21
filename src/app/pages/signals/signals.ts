import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
})
export class Signals implements OnInit {
  signalExampleVar = signal<string>('primer cambio');

  person = signal<Person>({
    age: 25,
    name: 'John Doe',
  });

  ngOnInit(): void {
    this.signalExampleVar.set('segundo cambio');
    this.person.update((p) => ({ ...p, age: 26 }));
  }

  increaseAge() {
    this.person.update((p) => ({ ...p, age: p.age + 1 }));
  }
}

export interface Person {
  age: number;
  name: string;
}
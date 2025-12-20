import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed',
  imports: [],
  templateUrl: './computed.html',
  styleUrl: './computed.scss',
})
export class Computed {

  count = signal<number>(0);

  doubleCount = computed<string>(() => `Double Count: ${this.count() * 2}`);

  increment() {
    this.count.update(c => c + 1);
  }

}

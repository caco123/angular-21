import { Component, effect } from '@angular/core';
import { person } from '../../shared/model';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.html',
  styleUrl: './effects.scss',
})
export class Effects {

  constructor() {
    effect(() => {
      if (person()) {
        console.log('person changed', person());
      }
    });
  }

  updatePerson() {
    person.update((p) => ({ ...p, age: p.age + 1 }));
  }
}

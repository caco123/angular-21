import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  input,
  OnInit,
  resource,
  ResourceStatus,
  signal,
} from '@angular/core';
import { Character } from '../http-resources/http-resources';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-resources',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './resources-page.html',
  styleUrl: './resources-page.scss',
})
export class ResourcesPage implements OnInit {

  query = signal<string>('');
  nameFormControl = new FormControl<string>('');

  user = resource<any, { name: string; }>({
    params: () => ({ name: this.query() }),
    loader: async ({ params, abortSignal }) => {
      const users = await fetch(`https://rickandmortyapi.com/api/character?name=${params.name}`, { signal: abortSignal });
      if (!users.ok) {
        throw new Error('Failed to fetch users');
      }
      return await users.json();
    },
  });

  loading = computed<boolean>(() => this.user.status() === 'loading');

  constructor() {
    effect(() => {
      console.log('User data changed:', this.user.status());
    });
  }
  ngOnInit(): void {
    this.nameFormControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((value) => {
      this.query.set(value ?? '');
    });
  }
  reload() {
    this.query.set('');
    this.user.reload();
  }

  addUser() {
    const newUser: Character = {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    };

    this.user.update((users) => (users ? { ...users, results: [...users.results, newUser] } : newUser));
  }
}
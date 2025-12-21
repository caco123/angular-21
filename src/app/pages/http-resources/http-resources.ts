import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-http-resources',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './http-resources.html',
  styleUrl: './http-resources.scss',
})
export class HttpResources implements OnInit {

  name = signal<string>('');

  nameFormControl = new FormControl<string>('');

  httpResources = httpResource<any>(() => (
    {
      url: 'https://rickandmortyapi.com/api/character',
      headers: { 'Content-Type': 'application/json' },
      params: { name: this.name() },
    })
  );

  characters = computed<Character[]>(() => this.httpResources.value()?.results ?? []);

  ngOnInit(): void {
    this.nameFormControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((value) => {
      this.name.set(value ?? '');
    });
  }
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  url: string;
  created: string;
}
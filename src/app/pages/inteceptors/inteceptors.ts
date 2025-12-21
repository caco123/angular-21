import { HttpClient, HttpContext } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { SKIP_ERROR_INTERCEPTOR } from '../../interceptors/http-error-interceptor';


@Component({
  selector: 'app-inteceptors',
  imports: [],
  templateUrl: './inteceptors.html',
  styleUrl: './inteceptors.scss',
})
export class Inteceptors implements OnInit {
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts_wrong').subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log('Error handled in component'),
    });

    this.http.get('https://pokeapi.co/api/v2/pokemon/ditto_wrong', {
      context: new HttpContext().set(SKIP_ERROR_INTERCEPTOR, true),
    }).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log('https://pokeapi.co/api/v2/pokemon/ditto_wrong Error handled in component'),
    });
  }
}

import { Component } from '@angular/core';
import { pagesRoutes } from '../pages.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export default class Home {
  pagesRoutes = pagesRoutes
} 
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
  pagesRoutes = pagesRoutes.filter(route => route.path !== '**' && route.path !== '');

  formatRouteName(path: string | undefined): string {
    if (!path) return 'Únknown Feature';
    return path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
} 
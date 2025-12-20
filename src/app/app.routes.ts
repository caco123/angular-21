import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home')
    },
    {
        path: '',
        loadChildren: () => import('./pages/pages.routes').then((m) => m.pagesRoutes)
    },
    {
        path: '**',
        redirectTo: ''
    },
];

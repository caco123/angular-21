import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
    {
        path: 'hooks',
        loadComponent: () => import('./hooks/hooks').then((m) => m.Hooks)
    },
    {
        path: 'signals',
        loadComponent: () => import('./signals/signals').then((m) => m.Signals)
    },
    {
        path: 'computed',
        loadComponent: () => import('./computed/computed').then((m) => m.Computed)
    },
    {
        path: 'control-flow-syntax',
        loadComponent: () => import('./control-flow-syntax/control-flow-syntax').then((m) => m.ControlFlowSyntax)
    },
    {
        path: 'directives',
        loadComponent: () => import('./directives/directives').then((m) => m.Directives)
    },
    {
        path: 'effects',
        loadComponent: () => import('./effects/effects').then((m) => m.Effects)
    },
    {
        path: 'pipes',
        loadComponent: () => import('./pipes/pipes').then((m) => m.Pipes)
    },
    {
        path: 'interceptors',
        loadComponent: () => import('./inteceptors/inteceptors').then((m) => m.Inteceptors)
    }
];

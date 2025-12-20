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
    }
];

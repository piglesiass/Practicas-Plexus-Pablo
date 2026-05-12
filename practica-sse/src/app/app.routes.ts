import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'sse-demo', loadComponent: () => import('./pages/sse-demo/sse-demo.component').then(m => m.SseDemoComponent)}
];

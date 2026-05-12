import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'websocket-demo', loadComponent: () => import ('./pages/websocket-demo/websocket-demo.component').then( m => m.WebsocketDemoComponent)}
];

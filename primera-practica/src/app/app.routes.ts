import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contacto/contacto.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
    {path: 'contacto', loadComponent: () => import('./pages/contacto/contacto.component').then(m => m.ContactComponent)},
    {path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)},
];

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Core Mind Solution' },
  // { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'home', component: NotFoundComponent, title: 'Core Mind Solution' },
];

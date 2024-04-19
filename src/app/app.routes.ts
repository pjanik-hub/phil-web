import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: '', redirectTo: 'home-component', pathMatch: 'full' },
  { path: 'contact-component', component: ContactComponent },
  { path: 'projects-component', component: ProjectsComponent },
  { path: '**', component: PageNotFoundComponent },
];

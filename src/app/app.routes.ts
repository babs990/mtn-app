import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path : 'home',
        component : HomeComponent,
        title : 'Acceuil'
    },
    {path : '', redirectTo : '/home', pathMatch : 'full'}

];

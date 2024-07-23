import { Routes } from '@angular/router';
import { LeaderComponent } from './leader/leader.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'leader/:id',
        component: LeaderComponent
    }
];

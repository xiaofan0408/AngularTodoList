import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';


export const routes: Routes = [
    {
        path: ':status',
        component: TodoDashboardComponent,
    },
    {
        path: '**',
        redirectTo: '/todo/all'
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

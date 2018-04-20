import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { RoutesComponent } from './routes.component';



export const routes: Routes = [
    {
        path: '',
        component: RoutesComponent,
        children: [
            { path: '', redirectTo: 'todo', pathMatch: 'full' },
            { path: 'todo', loadChildren: './todo/todo.module#TodoModule'}
       ],
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



export const routes: Routes = [
    {
        path: '',
        loadChildren: './features/routes.module#RoutesModule'
    }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
});

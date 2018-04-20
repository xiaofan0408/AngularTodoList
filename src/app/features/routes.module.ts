import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { routing } from './routes.routing';
import { SharedModule } from '../share/shared.module';
import { RoutesComponent } from './routes.component';

@NgModule({
    declarations: [
        RoutesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        routing,
        SharedModule
    ],
    exports: [],
    providers: []
})
export class RoutesModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [

  ],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule {
}

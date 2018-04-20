import { NgModule, APP_INITIALIZER, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfig } from './net/api.config';



export function configFactory(config: ApiConfig) {
  return () => config.load();
}

const providers = [
  { provide: APP_INITIALIZER, useFactory: configFactory, deps: [ApiConfig], multi: true }
];


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
//   providers
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        '核心模块CoreModule已经引入，只允许在根模块内导入核心模块');
    }
  }
}

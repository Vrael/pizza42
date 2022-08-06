import { LayoutsModule } from './layouts/layouts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LayoutsModule
  ],
  exports: [
    LayoutsModule
  ]
})
export class CoreModule { }

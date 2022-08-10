import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectiveModule } from './directives/directive.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    DirectiveModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    DirectiveModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VarDirective } from './ng-var.directive';


@NgModule({
  declarations: [
    VarDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    VarDirective
  ]
})
export class DirectiveModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { COMPONENTS, MATERIAL_MODULES, SERVICES } from './imports';

const CoreModules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  imports: [...CoreModules, ...MATERIAL_MODULES],
  declarations: [...COMPONENTS],
  providers: [...SERVICES],
  exports: [...CoreModules, ...COMPONENTS, ...MATERIAL_MODULES],
})
export class SharedModule {}

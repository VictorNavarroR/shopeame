import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion/gestion.component';
import { SharedModule } from 'src/app/shared/product/shared.module';


@NgModule({
  declarations: [
    GestionComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    SharedModule
  ],
  exports: [
    
  ]
})
export class GestionModule { }

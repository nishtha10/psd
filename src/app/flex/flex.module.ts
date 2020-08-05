import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexRoutingModule } from './flex-routing.module';
import { FlexComponent } from './flex.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [FlexComponent],
  imports: [
    CommonModule,
    FlexRoutingModule,
    MatCardModule
  ]
})
export class FlexModule { }

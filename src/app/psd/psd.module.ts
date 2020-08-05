import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PsdRoutingModule } from './psd-routing.module';
import { PsdComponent } from './psd.component';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [PsdComponent],
  imports: [
    CommonModule,
    PsdRoutingModule,
    MatCardModule,
    MatTableModule,
    CdkTableModule,
    MatIconModule
  ]
})
export class PsdModule {}

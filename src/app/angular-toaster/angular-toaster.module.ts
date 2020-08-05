import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularToasterRoutingModule } from './angular-toaster-routing.module';
import { AngularToasterComponent } from './angular-toaster.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [AngularToasterComponent],
  imports: [
    CommonModule,
    AngularToasterRoutingModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule

  ]
})
export class AngularToasterModule { }

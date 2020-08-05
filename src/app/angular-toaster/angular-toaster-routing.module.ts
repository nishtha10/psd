import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularToasterComponent } from './angular-toaster.component';

const routes: Routes = [{ path: '', component: AngularToasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularToasterRoutingModule { }

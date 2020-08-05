import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsdComponent } from './psd.component';

const routes: Routes = [{ path: '', component: PsdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsdRoutingModule { }

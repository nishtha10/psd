import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'angular-toaster', loadChildren: () => import('./angular-toaster/angular-toaster.module').then(m => m.AngularToasterModule) }, 
{ path: 'toaster', loadChildren: () => import('./toaster/toaster.module').then(m => m.ToasterModule) },
{ path: 'flex', loadChildren: () => import('./flex/flex.module').then(m => m.FlexModule) },
{ path: '', loadChildren: () => import('./psd/psd.module').then(m => m.PsdModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

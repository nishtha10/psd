import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToasterRoutingModule } from './toaster-routing.module';
import { ToasterComponent } from './toaster.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NotifyService } from './notify.service';


@NgModule({
  declarations: [ToasterComponent],
  imports: [
    CommonModule,
    ToasterRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers:[ToastrService,NotifyService]
})
export class ToasterModule { }

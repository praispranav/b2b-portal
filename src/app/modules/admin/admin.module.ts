import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SellerDetailsComponent } from './seller-details/seller-details.component';

@NgModule({
  //declarations: [SellerDetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }

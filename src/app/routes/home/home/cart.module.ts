import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { CartComponent } from './cart/cart.component';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [

  ],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }

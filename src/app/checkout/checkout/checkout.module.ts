import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { CheckoutPage } from './checkout.page';
import { KeysPipeModule } from '../../pipes/pipe.module';
const routes: Routes = [
  {
    path: '',
    component: CheckoutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    IonicModule,
    KeysPipeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}

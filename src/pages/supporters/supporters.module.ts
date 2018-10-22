import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupportersPage } from './supporters';

@NgModule({
  declarations: [
    SupportersPage,
  ],
  imports: [
    IonicPageModule.forChild(SupportersPage),
  ],
})
export class SupportersPageModule {}

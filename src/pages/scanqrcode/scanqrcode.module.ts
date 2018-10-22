import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanqrcodePage } from './scanqrcode';

@NgModule({
  declarations: [
    ScanqrcodePage,
  ],
  imports: [
    IonicPageModule.forChild(ScanqrcodePage),
  ],
})
export class ScanqrcodePageModule {}

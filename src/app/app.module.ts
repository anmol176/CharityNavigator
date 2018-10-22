import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tab } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { NewsPageModule } from '../pages/news/news.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { CharitytabsPageModule } from '../pages/charitytabs/charitytabs.module';
import { ScanqrcodePageModule } from '../pages/scanqrcode/scanqrcode.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { CharityhomePageModule } from '../pages/charityhome/charityhome.module';
import { DonationsPageModule } from '../pages/donations/donations.module';
import { SupportersPageModule } from '../pages/supporters/supporters.module';
import { ProjectPageModule } from '../pages/project/project.module';
import { SettingsPageModule } from '../pages/settings/settings.module';


import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), IonicStorageModule.forRoot(), NewsPageModule, TabsPageModule,
    ProfilePageModule, CharitytabsPageModule, ScanqrcodePageModule, CharityhomePageModule, DonationsPageModule,
    SupportersPageModule, ProjectPageModule, FormsModule, SettingsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }, Storage, BarcodeScanner
  ]
})
export class AppModule { }

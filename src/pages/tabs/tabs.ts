import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { ProfilePage } from '../profile/profile';
import { Storage } from '@ionic/storage';
import { ScanqrcodePage } from '../scanqrcode/scanqrcode';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var value:any;

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})


export class TabsPage {

  scannedCode = null;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage ) {
  }

  ionViewWillEnter() {
    
  }

  news = NewsPage;
  scan = ScanqrcodePage;
  profile = ProfilePage;

}

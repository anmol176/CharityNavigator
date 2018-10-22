import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
/**
 * Generated class for the ScanqrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanqrcode',
  templateUrl: 'scanqrcode.html',
})
export class ScanqrcodePage {

  scannedCode:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private Barcode: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanqrcodePage');
  }

  scanBarcode() {
    this.Barcode.scan().then((val)=>{
      this.scannedCode = val.text;
    });
  }

}

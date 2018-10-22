import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DonationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donations',
  templateUrl: 'donations.html',
})
export class DonationsPage {

  monthlyAmount = 100;
  totalAmount = 500;
  donors = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.donors = [
      {name: "Patrick", image:"assets/imgs/friend.jpg", project:"Save Trees", donation:250},
      {name: "Bart", image:"assets/imgs/bart.jpg", project:"Project Gold", donation: 125},
      {name: "Lisa", image:"assets/imgs/lisa.jpg", project:"Project Gold", donation: 125},
    ]
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationsPage');
  }

}

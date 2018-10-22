import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SettingsPage} from '../settings/settings';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  organisations: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.organisations = [
      {
        id: 1, image: "assets/imgs/morningStar.png", title: "Family Support Fund", description: "The Morning Star Family Support Fund support individuals from multi-stressed"
          + "families who require counselling or parenting skills coaching.", amountRaised: 15000
      },

      {
        id: 2, image: "assets/imgs/organDonation.png", title: "National University for Organ donation", description: "Be a Lifesaver, your support will help us address the most"
          + "pressing needs of our patients and allow them the second chance at life.", amountRaised: 22500
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  settings() {
    this.navCtrl.push("SettingsPage");
  }

}

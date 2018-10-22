import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharityhomePage } from '../charityhome/charityhome';
import { DonationsPage } from '../donations/donations';
import { SupportersPage } from '../supporters/supporters';
import { ProjectPage } from '../project/project';

/**
 * Generated class for the CharitytabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charitytabs',
  templateUrl: 'charitytabs.html',
})
export class CharitytabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharitytabsPage');
  }

  home = CharityhomePage;
  donations = DonationsPage;
  supporters = SupportersPage;
  project = ProjectPage;
}

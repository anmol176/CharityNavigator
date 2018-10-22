import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { TabsPage } from '../tabs/tabs';
import { CharitytabsPage } from '../charitytabs/charitytabs';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = { "username": "", "password": "" };
  value = 0;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private storage: Storage) {

  }

  login() {

    if (this.user.username == "test" && this.user.password == "123") {

      this.navCtrl.push("TabsPage");

    } else if (this.user.username == "NKF" && this.user.password == "789") {

      this.navCtrl.push("CharitytabsPage");
    
    } else {
      let alert = this.alertCtrl.create({
        message: "Incorrect Username/password",
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

}

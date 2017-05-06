import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
})
export class Songs {
 title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Songs');
    this.title = this.navParams.get('title');

  }

}

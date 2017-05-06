import { Component } from '@angular/core';
import { Intro } from '../intro/intro'
 import { AuthProvider } from '../../providers/auth-provider';
import { NavController,NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
ListPage = ListPage;
  constructor(public navCtrl: NavController,public params:NavParams,public auth: AuthProvider) {
  
       }
  

   logout(){
      this.auth.logout();
    }


}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Songs } from '../songs/songs';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 Songs = Songs;
 tracks: any;
 public trend: any;
    playing: boolean = true;
    currentTrack: any;
    progressInterval: any;

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
   this.tracks = [
            {title: 'Something About You', artist: 'ODESZA', playing: false, progress: 0, img:'assets/images/music_1.jpg'},
            {title: 'Run', artist: 'Allison Wonderland', playing: false, progress: 0, img:'assets/images/music_1.jpg'},
            {title: 'Breathe', artist: 'Seeb Neev', playing: false, progress: 0, img:'assets/images/music_1.jpg'},
            {title: 'HyperParadise', artist: 'Hermitude', playing: false, progress: 0, img:'assets/images/music_1.jpg'},
            {title: 'Lifespan', artist: 'Vaults', playing: false, progress: 0, img:'assets/images/music_1.jpg'},
            {title: 'Stay High', artist: 'Tove Lo', playing: false, progress: 0, img:'assets/images/music_1.jpg'},
            {title: 'Lean On', artist: 'Major Lazer', playing: false, progress: 0, img:'assets/images/music_1.jpg'},
            {title: 'They Say', artist: 'Kilter', playing: false, progress: 0, img:'assets/images/music_1.jpg'}
        ];
 
        this.currentTrack = this.tracks[0];

  }

clicked(track){
this.navCtrl.push(Songs, track)
  
}
global(track){
track= {title: "Global trending"};
 this.navCtrl.push(Songs, track );

}
ustrends(track){
track= {title: "US trending"};
 this.navCtrl.push(Songs, track );

}
}

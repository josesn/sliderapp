import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  public slider: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    console.log("Album", this.navParams.data);
    this.slider = this.navParams.data;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

}

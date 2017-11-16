import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HospedagemProvider } from '../../providers/hospedagem/hospedagem';
import { SliderPage } from '../../pages/slider/slider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public hospedagens: any [];

  constructor(public navCtrl: NavController,
              public hospProvider: HospedagemProvider) {

  }

  getHospedagens() {
      this.hospProvider.getAll()
        .subscribe(
          (hospedagens) => {
            this.hospedagens = hospedagens.lista;
            
          },
          (erros) => {
           console.log('erros', erros);
          }
        )
      }
  
  openSlider(hospedagem) {
    this.navCtrl.push("SliderPage", hospedagem);
  }
  
  ionViewDidLoad() {
    this.getHospedagens();
  }

}

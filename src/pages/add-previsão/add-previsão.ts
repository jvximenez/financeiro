import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';


/**
 * Generated class for the AddPrevisãoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-previsão',
  templateUrl: 'add-previsão.html',
})
export class AddPrevisãoPage {
  public categorias;
  public previsao = {
    'data': '',
    'ano':'',
    'mes':'',
  };
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.categorias = this.dbService.getArray('categoria');
    this.previsao = this.criaObjeto("testes");
    this.previsao['testes'] = "12"
  }


  criaObjeto(prop){
    Object.defineProperty(this.previsao, prop, {
      enumerable: true,   // não enumerável
      configurable: true, // não configurável
      writable: true,     // não gravável
      value: ''
    })

    return this.previsao;
  }

  


}

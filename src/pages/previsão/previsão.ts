import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPrevisãoPage } from '../add-previs\u00E3o/add-previs\u00E3o';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

/**
 * Generated class for the PrevisãoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previsão',
  templateUrl: 'previsão.html',
})
export class PrevisãoPage {
  public categorias;
  public previsao = {
    'total': '',
    'ano':'',
    'mes':'',
  };
  public previsoes;
  public valores;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider) {
    this.categorias = this.dbService.getAll('categoria');
    this.addPrevisao(this.categorias);
    this.previsoes =  this.dbService.getAll('previsao')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPrevisãoPage');
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

  addPrevisao(categorias){
    categorias.forEach(element => {element.forEach(a => this.criaObjeto(a.title))})
      console.log(this.previsao, " prev")
  
  }

  savePrevisao(previsao, categorias){

    previsao.mes = this.AchaMes();
    previsao.ano = this.achaAno();
    previsao.total = [previsao.ano,previsao.mes].join(' - ')
    this.addPrevisao(categorias)
    this.dbService.save('previsao',previsao)


  }

  Criacao(){
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var hora = data.getHours();
    var min = data.getMinutes();
    console.log([[dia, mes, ano].join('/'),[hora,min].join(':')].join(' - '));
    return ([[dia, mes, ano].join('/'),[hora,min].join(':')].join(' - '));
  }

  AchaMes(){
    var data = new Date();
    var mes = data.getMonth() +1;
    
    return(mes) 
   }

   achaAno(){
     var data = new Date();
     var ano = data.getFullYear();
    return((ano));
   }


   acharValores(variavel){
     let array = [];
     array.push(Object.keys(variavel))
     console.log(array)
     return (array)
   }

   retornaKeys(prev){
     console.log("entrou")
     let array;
     array = Object.keys(prev);
     console.log(array)
     return array
   }

}

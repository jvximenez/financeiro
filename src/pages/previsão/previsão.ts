import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddPrevisãoPage } from '../add-previs\u00E3o/add-previs\u00E3o';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { AlertController } from 'ionic-angular';
import firebase from 'firebase';

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

  public ComprasArray;
  prevRef;loadedprevList;prevList

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbService: FirebaseServiceProvider, public alertCtrl: AlertController) {
    this.categorias = this.dbService.getAll('categoria');
    this.addPrevisao(this.categorias);
    this.previsoes =  this.dbService.getAll2('previsao').map(a => a.reverse())

    this.ComprasArray = this.navParams.get('ComprasArray')

    this.prevRef = firebase.database().ref('/previsao').orderByChild("total")




    this.prevRef.on('value', prevList => {
      
      let prevA = [];
      prevList.forEach( prev => { 
        var obj
        obj = prev.val()
        obj.key = prev.key
        prevA.push(obj);
        
        return false;
      });
      prevA = prevA.reverse()
  
      this.prevList = prevA;
      this.loadedprevList = prevA;
      
    });

  }

  CalculaMedia(categoria,ano,mes){
    if(categoria == 'total'){
      return (' ')
    }
    var calc = 0;
    var cont = 0
    var total = ano*100+mes 
    var media
    this.prevList.forEach(item => {if(Number(item['ano'])*100+Number(item['mes'])> 201902 && Number(item['ano'])*100+Number(item['mes']) < Number(total)) {
      if (Number(item[categoria]) != 0 ){
        cont +=1;  
      }
      calc += Number(item[categoria])
      

     }})
    if (cont == 0){return 0}
    else{
      media = calc/cont
      media = Math.round(media)
      return (media)
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPrevisãoPage');
  }

  criaObjeto(prop){
    Object.defineProperty(this.previsao, prop, {
      enumerable: true,   // não enumerável
      configurable: true, // não configurável
      writable: true,     // não gravável
      value: '0'
    })

    return this.previsao;
  }

  addPrevisao(categorias){
    categorias.forEach(element => {element.forEach(a => this.criaObjeto(a.title))})
  
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


   retornaKeys(prev){
    
     let array;
     array = Object.keys(prev);
     
     return array
   }

   save(item){
     this.dbService.update('previsao',item)
   }

   deletar(item){
    const confirm = this.alertCtrl.create({
      title: 'Deletar esse item?',
      message: 'deseja confirmar? essa mudança sera irreversível',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
          }
        },
        {
          text: 'Confirma',
          handler: () => { this.dbService.revome('previsao',item)
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }



/////////////////////////// funcoes juntas///////////////////
 
  retornaArray(prevv){
    let cat = this.getCategorias(prevv)
    let a = 0 ;
    cat.forEach (element => a += (Number(prevv[element])))
    return a


  }

  getCategorias(previsao){
    let a = Object.keys(previsao)
    let array = []
    a.forEach(element => { if(element != 'key' && element != 'total' && element != 'mes' && element != 'ano'&& element != 'comentario') {array.push(element)} 
    });
    return (array)
    
  }
  ////////////////////////////acabou///////////////////

  somaCat(categoria,data){
    var valorCat = 0 
    this.ComprasArray.forEach(item => {if (String(item[2]) == String(categoria) && 
      String(item[1]) == String(data)) { valorCat = valorCat + Number(item[0])}}
    );

    return(Math.round(valorCat))
  }




}

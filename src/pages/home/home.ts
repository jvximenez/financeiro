import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { ConfiguraçõesPage } from '../configura\u00E7\u00F5es/configura\u00E7\u00F5es';
import { StatusBar } from '@ionic-native/status-bar';
import { EditAtalhoPage } from '../edit-atalho/edit-atalho';
import { ToastController } from 'ionic-angular';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';
import firebase from 'firebase';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  doRefresh(refresher) {
    this.show = !this.show

    setTimeout(() => {
      refresher.complete();
    }, 50);
  }

  public show = false;
  public showGraf = false;


  compras = {
    'title': '',
    'payload': '',
    'categoria':'Comida',
    'pagamento': 'Nubank',
    'data': '',
    'ano':'',
    'mes':'',
    'total':'',

  };

  categoriaDiv ={
    'title': '',
  }

  public divida

  public DataO;
  public Pessoas;


  Arredonda(item){
    return Math.round(item)
    
  }

  public atalhos;

 
  public categorias;
  public pagamentos;
  public previsto;

  public mes;
  public ano;
  public Compras;
  public ComprasArray;
  public ArrayTotal;

  public array1 = [1,2,3,4,5]
  public array2 = [5,6,7,1,2]

  a1 = 0
  a2 = 0
  a3 = 0
  a4 = 0

  public favorito;
  public diaMes;Dataa
  public copia = "oi"
  public atalhoCopia

  countryRef;loadedCountryList
  countryRef2;loadedCountryList2

  total; totalMenos


  constructor(public navCtrl: NavController,
     public dbService: FirebaseServiceProvider,
     private statusBar: StatusBar,
     public alertCtrl: AlertController,
     private toastCtrl: ToastController,
     ) {



    this.DataO = new Date().toISOString();
    this.Dataa = new Date

    this.Criacao(0)
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.categorias = this.dbService.getAllO('categoria','numero').map(a=> a.reverse())
    this.pagamentos = this.dbService.getAllO('pagamento','numero').map(a=> a.reverse())
    this.atalhos = this.dbService.getAll('atalho')

    this.compras.mes = String(this.AchaMes());
    this.compras.ano = String(this.achaAno());
    this.compras.data = this.Criacao(0);
    

    this.mes = this.AchaMes();
    this.ano = this.achaAno();
    this.total= this.ano*10000+this.mes*100
    this.totalMenos = this.ano*10000+(this.mes+1)*100
  
    
    this.previsto = []
    this.Compras = []
    

    this.favorito = this.dbService.getAllQuantidadeO('categorias','numero',1).map(a=> a.reverse())
    this.favorito = this.favorito.forEach(itens => {itens.forEach(item=> {return item.title})})

    this.Pessoas = this.dbService.getAll2('configuracoes/pessoas')
    this.diaMes = this.daysInMonth(this.Dataa.getMonth()+1,this.Dataa.getFullYear())



    this.countryRef = firebase.database().ref('/compras').limitToLast(100).orderByChild("total")

    this.countryRef2 = firebase.database().ref('/previsao').limitToLast(30).orderByChild("total")



    this.countryRef.on('value', countryList => {
      
      let countries = [];
      countryList.forEach( country => { 
        var obj
        obj = country.val()
        obj.key = country.key
        countries.push(obj);
        
        return false;
      });
      countries = countries.reverse()

      this.loadedCountryList = countries;

      console.log(this.loadedCountryList)

    });


    this.countryRef2.on('value', countryList => {
      
      let countries = [];
      countryList.forEach( country => { 
        var obj
        obj = country.val()
        obj.key = country.key
        obj.total2 = Number(obj.ano)*10000+Number(obj.mes)*100
        countries.push(obj);
        
        return false;
      });
      countries = countries.reverse()

      this.loadedCountryList2 = countries;


    });
   
    
  }

  SomaCat(Categoria){
    var a = 0
    if (this.loadedCountryList != undefined){
    this.loadedCountryList.forEach(element => {if (element.categoria == Categoria && element.total > this.total && element.total < this.totalMenos ){
      a += Number(element.payload)
    }

    if(Categoria == "Total"){
      a = 0
      this.loadedCountryList.forEach(element => {if (element.total > this.total && element.total < this.totalMenos &&
         element.categoria != "Ignorar"){
        a += Number(element.payload)
      }

    })}

      
    });}


    return Math.round(a)
  }

  retornaArray(prevv){
    let cat = this.getCategorias(prevv)
    let a = 0 ;
    cat.forEach (element => a += (Number(prevv[element])))
    return a


  }

  getCategorias(previsao){
    let a = Object.keys(previsao)
    let array = []
    a.forEach(element => { if(element != 'key' && element != 'total' && element != 'mes' && element != 'ano'&& element != 'comentario' && element != "total2") {array.push(element)} 
    });
    return (array)
    
  }

  Prev(Categoria){
    var a = 0
    if (this.loadedCountryList2 != undefined){
    this.loadedCountryList2.forEach(element => {if (element.total2 == this.total){
      a += Number(element[Categoria])
    }

    if(Categoria == "Total"){
      var b = []
      this.loadedCountryList2.forEach(element => {if (element.total2 == this.total){
        element.forEach(element2 => {console.log("aaaah")})
          
 
      }})}})}

    return Math.round(a)

  }



  


  teste(array){
    var data = new Date
    var a1 = (String(array[0]*100/array[3])+'%')
    var a2 = (String((array[1]*100)/array[3])+'%')
    var a3 = (String((array[2]*100/array[3]))+'%')
    var a4 = (String("100%"))
    var diaMes = this.daysInMonth(data.getMonth()+1,data.getFullYear())
    var a5 =  (String((Number(data.getDate())/diaMes)*100)+'%')
 
  
    document.getElementById("teste4").style.width = a1
    document.getElementById("teste3").style.width = a2
    document.getElementById("teste2").style.width = a3
    document.getElementById("teste1").style.width = a4
    document.getElementById("testeDia").style.width = a5
    document.getElementById("testeMes").style.width = a4

  }

  daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

  AtalhoDivide(){
    var local
    var valor
    var categoria
    var temBarra = false
    for (var i = 0; i < String(this.atalhoCopia).length; i++) {
      if(String(this.atalhoCopia).charAt(i)=="/")
      {temBarra = true};
    }
    if (temBarra == true){
      var array = this.atalhoCopia.split("/")
      array[0] = array[0].replace(",",".")
      this.compras.title = array[1]
      this.compras.payload = array[0]
      this.compras.categoria = array[2]
    }

  } 

  moveFocus(nextElement) {
    nextElement.setFocus();
  }

  Fav(){
    if (this.compras.pagamento == this.favorito){
      this.compras.pagamento = "Dinheiro"
      return
    }
    this.compras.pagamento = this.favorito
  }

  atualiza(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  Fav2(){
    if (this.compras.categoria == "Mercado"){
      this.compras.categoria = "Comida"
      return
    }
    this.compras.categoria = "Mercado"
  }

  save(compras){
    this.MudandoData(this.DataO)
    if (this.compras.categoria == "Divida"){
      this.compras.categoria = "Divida - " + this.divida
    }
    if ( this.categoriaDiv.title != '' && Number(this.compras.payload) > 0){
      this.Dividindo();
      this.compras.title += " -Divido Paguei"
      this.PopUp()
      this.dbService.save('compras',compras);

      this.mes = compras.mes
      this.ano = compras.ano

      this.compras.categoria = this.categoriaDiv.title
      this.categoriaDiv.title = ''
    }
    if ( this.categoriaDiv.title != ''  && this.compras.pagamento == "Divida"){
      this.Dividindo();
      this.compras.title += " -Divido Pagou"
      this.compras.pagamento = "Ignorar"
      this.compras.payload = String(Number(this.compras.payload))
      this.PopUp()
      this.dbService.save('compras',compras);

      this.mes = compras.mes
      this.ano = compras.ano

      this.compras.pagamento = "Divida"
      this.compras.categoria = this.categoriaDiv.title
      this.compras.payload = String(Number(this.compras.payload) * (-1))
      this.categoriaDiv.title = ''
    }

    this.PopUp()
    this.dbService.save('compras',compras);

    this.mes = compras.mes
    this.ano = compras.ano

    this.previsto = this.dbService.getAll('previsao')
    this.Compras = (this.dbService.getAllQuantidade('compras',100)).map(a => a.reverse());
    this.ArrayTotal =  this.CriaArrayGrafico(compras.categoria)
    this.showGraf = true;
    setTimeout(()=> {
      this.teste(this.ArrayTotal)
    },1000)
  }

  ontem(compras){
      var date = new Date
      date.setDate(date.getDate() - 1)
      this.DataO = date.toISOString()
      this.PopUp()
      this.compras.mes = compras.mes
      this.compras.ano = compras.ano
      this.save(this.compras)

      
    }
    

  save2(teste){
    this.PopUp()
    this.dbService.save('compras','Janeiro');
  }

  NavConfirg(){
    this.navCtrl.push(ConfiguraçõesPage)
  }


  Criacao(A){
    var data = new Date();
    var dia = data.getDate()-A;
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


  

   swipe(event) {
    if(event.direction == 2) {
      this.navCtrl.parent.select(1)
    }
    if(event.direction == 16) {
      this.show = false
      return this.show
    }
    if(event.direction == 16) {
      this.show = true
      return this.show
    }

    
  }

  Louco(){
    this.show = false;
    
  }

  saveAtalho(compras, atalho){
    if (atalho.gasto != 0){
    this.MudandoData(this.DataO)
    compras.title = atalho.title;
    compras.categoria = atalho.categoria;
    compras.payload = atalho.gasto;
    compras.pagamento = atalho.pagamento;
    this.PopUp()
    this.dbService.save('compras',compras)}
    if (atalho.gasto == 0){
    this.MudandoData(this.DataO)
    compras.title = atalho.title;
    compras.categoria = atalho.categoria;
    compras.pagamento = atalho.pagamento;
    {
      const prompt = this.alertCtrl.create({
        title: 'Valor',
        
        inputs: [
          {
            name: 'valor',
            placeholder: 'Valor'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked')
            }
          },
          {
            text: 'Salvar',
            handler: data => {compras.payload = data.valor;
              this.PopUp()
              this.dbService.save('compras',compras);
              console.log('Saved clicked');
              
            }
          }
        ]
      });
      prompt.present();

    }
  }  
  this.show = false
  this.previsto = this.dbService.getAll('previsao')
  this.Compras = (this.dbService.getAllQuantidade('compras',100)).map(a => a.reverse());
  this.ArrayTotal =  this.CriaArrayGrafico(compras.categoria)
  this.showGraf = true;
  setTimeout(()=> {
    this.teste(this.ArrayTotal)
  },1000)
  }

  atalhoPush(atalho){
    this.navCtrl.push(EditAtalhoPage, {
      'atalho': atalho
    })
  }

  

  Favorito(){
    this.compras.pagamento = "N26"
  }

  arrayCompras(compras){
    let array = []
    let linha = []
    compras.forEach( itens => itens.forEach(item => {linha = [], linha.push(item.payload,[item.ano,item.mes].join(' - '),item.categoria,item.pagamento,item.total), array.push(linha)}))
    
    return (array)
 
  }


  CriaArrayGrafico(Categoria){
    var ArrayT = [0,0,0,0]
    this.Compras.forEach(itens => itens.forEach (item => { if(item.categoria == Categoria && item.categoria != "Ignorar"  && item.ano == this.ano && Number(item.mes) == Number(this.mes)){ArrayT[0] += Number(item.payload)}}))
    this.previsto.forEach(itens => itens.forEach (item => {if(item.ano == this.ano && item.mes == this.mes){ ArrayT[1] += Number(item[Categoria])}}))
    this.Compras.forEach(itens => itens.forEach (item => {if(item.ano == this.ano && item.mes == this.mes && item.categoria !="Ignorar"){ArrayT[2] += Number(item.payload)}}))
    this.previsto.forEach(itens => itens.forEach (item => {if(item.ano == this.ano && item.mes == this.mes){ ArrayT[3] += Number(this.retornaArray(item))}}))
    return (ArrayT)

  }

  Hoje(){
    var data1 = new Date
    var data = [data1.getFullYear(),Number(data1.getMonth() + 1), data1.getDay()].join('-')
    return data

  }

  Mostra(){
    this.MudandoData(this.DataO)
  }

  MudandoData(valor){
    var fields = valor.split('-')
    var dia = fields[2].split('T')
    this.compras.ano =  fields[0]
    this.compras.mes =  String(Number(fields[1]))
    this.compras.total =  String(Number(Number(this.compras.ano)*10000 + Number(this.compras.mes)*100 + Number(dia[0])));
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    this.compras.data = ([[Number(dia[0]), Number(this.compras.mes), Number(this.compras.ano)].join('/'),[hora,min].join(':')].join(' - '));
  }

  Dividindo(){
    this.compras.payload = String(Number(this.compras.payload) / 2)
  }

  DividaEu(item){
    item.categoria = "Divida"
    this.divida = "Daniela"
    this.categoriaDiv.title = "Date"
  }

  DividaDani(item){
    item.pagamento = "Divida"
    item.categoria = "Divida"
    this.divida = "Daniela"
    this.categoriaDiv.title = "Date"
    item.payload = -item.payload
  }

  PopUp(){
    let texto = "Adicionado " + this.compras.title
    let toast = this.toastCtrl.create({
      message: texto,
      duration: 2000
      });
      toast.present();
  
  }



  Parcelar(compras){
    {
      const prompt = this.alertCtrl.create({
        title: 'Parcelamento em quantas vezes?',
        
        inputs: [
          {
            name: 'Num',
            placeholder: 'Número'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked')
            }
          },
          {
            text: 'Salvar',
            handler: data => {;
              compras.payload = compras.payload/Number(data.Num)
              var cont = 1;
              var inicio = compras.title
              while (cont <= Number(data.Num)) {
                compras.title = inicio + " " + cont+ "/" + data.Num
                var dataA = new Date()
                dataA.setMonth(dataA.getMonth() + cont-1)
                this.DataO = dataA.toISOString()
                cont +=1
                this.save(compras);
                this.mes = compras.mes
                this.ano = compras.ano
                
                

              }

              

              console.log('Saved clicked');
              
            }
          }
        ]
      });
      prompt.present();

    }
  }  
  

  



  
}

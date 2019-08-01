import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import chartJs from 'chart.js';
import { AnaliseCategoriaPage } from '../analise-categoria/analise-categoria';
import { AnalisePagamentoPage } from '../analise-pagamento/analise-pagamento';
import { PrevisãoPage } from '../previs\u00E3o/previs\u00E3o';
import { GraficosPage } from '../graficos/graficos';
import firebase from 'firebase';
import { AnaliseDividaPage } from '../analise-divida/analise-divida';



/**
 * Generated class for the AnalisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analise',
  templateUrl: 'analise.html',
})
export class AnalisePage {

  comprasO = {
    'title': '',
    'payload': '',
    'categoria':'',
    'pagamento': '',
    'data': '',
    'ano':'',
    'mes':'',
    'total':'',

  };

  public showM = false



  

 categorias;
 previsto;
 pagamentos;
 compras;
 ComprasArray;

  

  ///////////chars public //////////////
  public categoriasChart;
  public valoresChart;
  public valoresPrevistos;
  public ShowTarefas;

  public ArrayDividas;DataO;SomaNuConta

  comprasRef;loadedcompraList;compraList
  ///////////////////////////////////////

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public dbService: FirebaseServiceProvider, public alertCtrl: AlertController) {
    this.categorias = this.dbService.getAll('categoria')
    this.previsto = this.dbService.getAll2('previsao').map(a => a.reverse())
    this.pagamentos = this.dbService.getArray('pagamento')
    this.compras = this.dbService.getAll('compras')
    this.ComprasArray = this.arrayCompras(this.compras);

    this.ShowTarefas = this.dbService.getAll('configuracoes/shows2')


    this.comprasO.mes = String(this.AchaMes());
    this.comprasO.ano = String(this.achaAno());
    this.comprasO.data = this.Criacao(0);
    this.DataO = new Date().toISOString();
    this.comprasO.total = String(Number(Number(this.comprasO.ano)*10000 + Number(this.comprasO.mes)*100 + Number(this.AchaDia())));
    this.SomaNuConta = this.SomaNu("NuConta","Reserva de emergência","Reserva para metas", "Reserva para estudos")



    this.comprasRef = firebase.database().ref('/compras').orderByChild("total")


    //chart//
    this.categoriasChart = (this.getChartCat(this.categorias));
    this.ArrayDividas = this.SeriesA()

   

  

  this.comprasRef.on('value', comprasList => {
      
    let comprasA = [];
    comprasList.forEach( compra => { 
      var obj
      obj = compra.val()
      obj.key = compra.key
      comprasA.push(obj);
      
      return false;
    });
    comprasA = comprasA.reverse()

    this.compraList = comprasA;
    this.loadedcompraList = comprasA;
    
  });

}

  ////////////////////////////////////////////////CHARTS/////////////////////////////////////


  
  grafico(previsao,data,compras,comprasArray){
    this.navCtrl.push(GraficosPage, 
      {'previsao' : previsao,
      'data':data,
      'compras':compras,
      'comprasArray': comprasArray});
    }
  

  getChartCat(categorias){
    let arrayC = [];
    categorias.forEach(element => { element.forEach( item => {arrayC.push(item['title'])})});
    
    return (arrayC)
  }

  VerMais(){
    this.showM = !this.showM
  }
 

  getChart(context, charType, data, options){
    return new chartJs(context, {
      data,
      options,
      type: charType
    })
  }

  getBarChart(){
    const data = {
      labels: this.categoriasChart,
      datasets: [{
        label: 'Planejado',
        data: [0,0,0,0,0,0,0],
        backgroundColor:  '#2f6acf',
        borderWidth: 2
    },{
      label: 'Gasto',
      data: this.valoresChart,
      backgroundColor: '#32b9db',
      borderWidth: 2
    }],
  
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          autoSkip: false,
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: false,
        }

      }]
    }
  }

  return 0;
}


  getGastoChart(data, categorias, compras){

    let linha = []
    categorias.forEach(itens => {itens.forEach(item => {linha.push(this.somaCat2(item.title,data))})})
    return (linha)
  }

  ///////////////////////////////////////////////////////////////////////////////////////////

 


  Analisa(A,B,C){
    if (C =="color"){
      if (Number(A) > Number(B)){
        return "primary"
      }
      if (Number(A) == Number(B)){
        return "dark"
      }
      if (Number(A) < Number(B)){
        return "danger"
      }
    }
    else{
      if (Number(A) > Number(B)){
        return "arrow-dropup"
      }
      if (Number(A) == Number(B)){
        return "remove"
      }
      if (Number(A) < Number(B)){
        return "arrow-dropdown"
      }

    }
  }


  AlteraValor(valor,valor2){
    const prompt = this.alertCtrl.create({
      title: 'Valor atual',
      message: "Entre com valor atual",
      inputs: [
        {
          name: 'val',
          placeholder: 'Valor',
          type:'number',
        
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            var a = Number(valor) - Number(data.val)
            a =  Math.round(a*100)/100
            console.log(a,"olha a aqui")
            this.comprasO.title = "Ajustando"
            this.comprasO.categoria = "Ignorar"
            this.comprasO.pagamento = valor2
            this.comprasO.payload = String(a)

            this.dbService.save('compras',this.comprasO);
          }
        }
      ]
    });
    prompt.present();


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
   AchaDia(){
     var data = new Date();
     var dia = data.getDate();
     return dia
   }

   achaAno(){
     var data = new Date();
     var ano = data.getFullYear();
    return((ano));
   }


  arrayCompras(compras){
    let array = []
    let linha = []
    compras.forEach( itens => itens.forEach(item => {linha = [], linha.push(item.payload,[item.ano,item.mes].join(' - '),item.categoria,item.pagamento,item.total), array.push(linha)}))
    
    return (array)
 
  }


  somaCat(categoria,data){
    var valorCat = 0 
    this.ComprasArray.forEach(item => {if (String(item[2]).includes(String(categoria)) && 
      String(item[1]) == String(data)) { valorCat = valorCat + Number(item[0])}}
    );

    return(Math.round(valorCat))
}
  somaCat3(categoria,data){
    var valorCat = 0 
    this.compraList.forEach(item => {if (String(item['categoria']).includes(String(categoria)) && 
      String([String(item['ano']),String(item['mes'])].join(' - ')) == String(data)) { valorCat = valorCat + Number(item['payload'])}}
    );

    return(Math.round(valorCat))
  }

  somaReceita(data){
    var valorCat = 0 
    this.compraList.forEach(item => {if (String(item['title']).includes(String("Entrou")) && 
      String([String(item['ano']),String(item['mes'])].join(' - ')) == String(data)) { valorCat = valorCat + Number(item['payload'])}}
    );

    return(Math.round(valorCat))
  }

  somaCatDiv(categoria){
    var valorCat = 0 
    this.ComprasArray.forEach(item => {if (String(item[2]) == String(categoria)) { valorCat = valorCat + Number(item[0])}}
    );
    return(Math.round(valorCat))
  }

  somaCatDiv2(categoria){
    var valorCat = 0 
    this.compraList.forEach(item => {if (String(item['categoria']) == String(categoria)) { valorCat = valorCat + Number(item['payload'])}}
    );
    return(Math.round(valorCat))
  }

  somaPagDiv(pagamento){
    var valorCat = 0 
    this.ComprasArray.forEach(item => {if (String(item[3]) == String(pagamento)) { valorCat = valorCat + Number(item[0])}}
    );
    return(Math.round(-valorCat))
  }

  somaPagDiv2(pagamento){
    var valorCat = 0 
    this.compraList.forEach(item => {if (String(item['pagamento']) == String(pagamento)) { valorCat = valorCat + Number(item['payload'])}}
    );
    this.compraList.forEach(item => {if (String(item['categoria']) == String(pagamento)) { valorCat = valorCat - Number(item['payload'])}}
    );
    return(Math.round(-valorCat))
  }

  SomaNu(pagamento1,pagamento2,pagamento3,pagamento4){
    var valorCat = 0 
    this.ComprasArray.forEach(item => {if (String(item[3]) == (pagamento1) || String(item[3]) == (pagamento2) || String(item[3]) == (pagamento3) || String(item[3]) == (pagamento4))
       {valorCat = valorCat + Number(item[0])}}
    );
    return(Math.round(-valorCat))
  }

  SomaNu2(pagamento1,pagamento2,pagamento3,pagamento4){
    var valorCat = 0 
    this.compraList.forEach(item => {if (String(item['pagamento']) == (pagamento1) || String(item['pagamento']) == (pagamento2) || String(item['pagamento']) == (pagamento3) || String(item['pagamento']) == (pagamento4))
       {valorCat = valorCat + Number(item['payload'])}}
    );
    return(Math.round(-valorCat))
  }

  cor(categoria){
    if (categoria == "Ignorar"){
      return("danger")
    }
    else{return("black")}
  }


  somaCat2(categoria,data){
    let valorCat = 0 
    this.ComprasArray.forEach(item => {if (String(item[2]) == String(categoria) && 
      String(item[1]) == String(data)) { valorCat = valorCat + Number(item[0])}}
    );
    return(Math.round(valorCat))
  }

  somaPagamento(pagamento,data){
    var valorPag = 0 
    this.ComprasArray.forEach(item => {if (String(item[3]) == String(pagamento) && 
      String(item[1]) == String(data) && (String(item[2]) != ("Ignorar")))  { valorPag = valorPag + Number(item[0])}}
    );

    return(Math.round(valorPag))
  }

  somaSemana(semana,data){
    var SemanPag = 0
    if (semana == 1){
      var a = 1
      var b = 7
    }
    if (semana == 2){
      var a = 8
      var b = 14
    }
    if (semana == 3){
      var a = 15
      var b = 21
    }
    if (semana == 4){
      var a = 22
      var b = 31
    }

    this.ComprasArray.forEach(item => {if ((Number(item[4].substr(-2, 2))) >= a && (Number(item[4].substr(-2, 2)))  <= b && String(item[1]) == String(data)) { if(item[2] != 'Ignorar') {SemanPag = SemanPag + Number(item[0])}}}
    );

    return(Math.round(SemanPag))
  }


  somaTotal(data){
    var valorTotal = 0
    this.ComprasArray.forEach(item => {if (String(item[2]) != ("Pais") && (String(item[2]) != ("Ignorar") && String(item[1])) == String(data)) { valorTotal = valorTotal + Number(item[0])}}
    );

    return(Math.round(valorTotal))
  }

  swipe(event) {
    if(event.direction === 4) {
      this.navCtrl.parent.select(1);
    }
  }

  atualiza(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  goToAnalise(data,categoria){
  this.navCtrl.push(AnaliseCategoriaPage, 
    {'data' : data,
    'categoria': categoria,
     'compra': this.compras });
  }
  goToAnaliseDiv(div){
    this.navCtrl.push(AnaliseDividaPage,
      {'divida':div})
  }

  goToAnalisePag(data,pagamento){
    this.navCtrl.push(AnalisePagamentoPage, 
      {'data' : data,
      'pagamento': pagamento,
       'compra': this.compras });
    }

  previsao(compras){
    this.navCtrl.push(PrevisãoPage,
      {'ComprasArray': compras})
  }



  ///////////////////////////////<< PREVISAO >>////////////////////////////////////


  retornaKeys(prev){
    let array;
    array = Object.keys(prev);

    return array
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
    a.forEach(element => { if(element != 'key' && element != 'total' && element != 'mes' && element != 'ano' && element != "comentario") {array.push(element)} 
    });
    return (array)
    
  }

  CorIfTrue(dado){
    if (dado ==  true){
      return "primary"
    }
    if (dado !=  true){
      return ""
    }
  }

  ChangeCheckTarefas(tarefa){
    tarefa.check = !tarefa.check
    this.dbService.update('configuracoes/shows2',tarefa)
  }


  SeriesA(){
    var array = []
    var B = false
    this.compras.forEach(element => {element.forEach( elem => {if(elem.categoria.includes("Divida")){B = false; array.forEach(A => {if (A == elem.categoria) { B = true}}); if (B == false) {array.push(elem.categoria)}}})
    
  })
  return (array)
  
  }



 
  


}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import chartJs from 'chart.js';
import firebase from 'firebase';


/**
 * Generated class for the GraficosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graficos',
  templateUrl: 'graficos.html',
})
export class GraficosPage {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  @ViewChild('pieCanvas') pieCanvas;
  pieChart: any;
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;
  


  public compras;
  public data;
  public previsao;
  public comprasArray;

  public categorias;

  public valoresPrevistos;

  public valoresGastos;

  
  public gradiente = [];
  prevRef
  prevList
  total2


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.compras = this.navParams.get('compras')
    this.data = this.navParams.get('data')
    this.previsao = this.navParams.get('previsao')
    this.comprasArray =  this.navParams.get('comprasArray')

    this.categorias = Object.keys(this.previsao)
    this.categorias = this.getCategorias(this.categorias)

    this.valoresPrevistos = this.getValoresPrevistos( this.categorias, this.previsao )

    this.gradiente = this.Color(11);    

    this.prevRef = firebase.database().ref('/previsao').orderByChild("total")


    this.prevRef.on('value', prevList => {
      
      
      let prevA = [];
      let Total2 = []
      prevList.forEach( prev => { 
        var obj
        obj = prev.val()
        obj.key = prev.key
        obj.total2 = (Number(Number(obj.ano)*100+Number(obj.mes)))
        if (obj.total2 > 201903){Total2.push(obj.total2)}
        prevA.push(obj);
        
        return false;
      });
      prevA = prevA.reverse().sort(function(b, a){return a.total2 - b.total2})
  
      this.prevList = prevA;
  
      this.total2 = Total2.sort()
     
      
    });

    this.GetValue("Amigos")


    

  }

  GetValue(Parametro){
    let array = []
    this.total2.forEach(total2 => {this.prevList.forEach(element => { if(element.total2 ==  total2  )
      {array.push(element[Parametro])}
      
    });
      
    });
  
      return array
      
  }

  retornaArray(prevv){
    let cat = this.getCategorias5(prevv)
    let a = 0 ;
    cat.forEach (element => a += (Number(prevv[element])))
    return a


  }


  

  GastoTotal(){
    let array = []  
    this.total2.forEach(total2 => {this.prevList.forEach(element => {if(element.total2 ==  total2  )
      {array.push(this.retornaArray(element))}
      
    });
      
    });
      return array
      
  }

  

  gradienteX(val){
    let b = 47
    var c = 106
    let branc1 =255
    let incremento1 = (b - branc1)/val.lenght
    let incremento2 = (b - branc1)/val.lenght
    let a = 0
    while (a < (val.lenght)){
      b += incremento1
      c += incremento2

      
    }
  }


  ngAfterViewInit(){
    setTimeout(()=> {
      this.barChart = this.getBarChart();
      this.pieChart = this.getPieChart();
      this.lineChart = this.getLineChart();
    },100)

    setTimeout(()=> {
      this.valoresGastos = this.getGastoChart(this.data, this.categorias, this.compras)
    },50)
}

  getCategorias(previsao){
    let array = []
    previsao.forEach(element => { if(element != 'key' && element != 'total' && element != 'mes' && element != 'ano' && element != 'Ignorar' && element != 'total2'&& element != 'comentario') {array.push(element)} 
    });
    return (array)
    
  }

  getCategorias5(previsao){
    let a = Object.keys(previsao)
    let array = []
    a.forEach(element => { if(element != 'key' && element != 'total' && element != 'mes' && element != 'ano' && element != "comentario" && element != "total2") {array.push(element)} 
    });
    return (array)
    
  }

  getValoresPrevistos(cat,prev){
    let array =[];
    cat.forEach (element => array.push(prev[element]))
  
    return array
  }


  getGastoChart(data, categorias, compras){

    let linha = []
    categorias.forEach(item => {linha.push(this.somaCat2(item,data))})

    return (linha)
  }

  somaCat2(categoria,data){

    let valorCat = 0 
    this.comprasArray.forEach(item => {if (String(item[2]) == String(categoria) && 
      String(item[1]) == String(data)) { valorCat = valorCat + Number(item[0])}}
    );
    
    return((valorCat))
  }


  getBarChart(){
    const data = {
      labels: this.categorias,
      datasets: [{
        label: 'Planejado',
        data: this.valoresPrevistos,
        backgroundColor:  '#2f6acf',
        borderWidth: 2
    },{
      label: 'Gasto',
      data: this.valoresGastos,
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
  

  return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
}

  getChart(context, charType, data, options){
    return new chartJs(context, {
      data,
      options,
      type: charType
    })
  }

  getPieChart(){
    const data = {
      datasets: [{
          data: this.valoresPrevistos,
          backgroundColor: ["#ADD8E6","#87CEEB","#87CEFA","#00BFFF","#1E90FF","#4169E1","#6495ED","#0000FF","#0000CD","#00008B","#191970","#483D8B","#6959CD","#836FFF","#6A5ACD","#4682B4"]
      }],
  
      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: this.categorias
      
  };

  const options = {
  }
  

  return this.getChart(this.pieCanvas.nativeElement, 'pie', data, options);
    
  }

  Color(a){
    
    let array= []
    let sempre = Math.round(255/(a-1))
    let c = 0
    let b = 0
    while (b < a) {
      b +=1
      array.push(('rgba(' + String(c)+','+ String(c)+ ','+'230)'))
      c += sempre;
    } 
    
    return array
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return String(color);
  }

  ArrayColor(number){
    var array = []
    var a = 0
    while (a < number){
      array.push(this.getRandomColor())
      a = a+1
    }
  
    return array

  }

  getCategorias2(previsao){
    let a = Object.keys(previsao)
    let array = []
    a.forEach(element => { if(element != 'key' && element != 'total' && element != 'mes' && element != 'ano'&& element != 'comentario' && element != "total2") {array.push(element)} 
    });
    return (array)
    
  }


  getLineChart(){
    const data = {
      labels: this.total2,
      datasets: [{
        label: 'Amigos',
        data: this.GetValue("Amigos"),
        borderColor:  '#ADD8E6',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 2
    },{
      label: 'Date',
      data: this.GetValue("Date"),
      borderColor: '#87CEEB',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2
    },{
      label: 'Combustivel',
      data: this.GetValue("Combustivel"),
      borderColor: '#87CEFA',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2
    },
    {
      label: 'Transporte',
      data: this.GetValue("Transporte"),
      borderColor: '#00BFFF',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2
    },
    {
      label: 'Extra',
      data: this.GetValue("Extra"),
      borderColor: '#1E90FF',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2
    },
    {
      label: 'Telefone',
      data: this.GetValue("Telefone"),
      borderColor: '#4169E1',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2
    },
    {
      label: 'Viagem',
      data: this.GetValue("Viagem"),
      borderColor: '#6495ED',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2
    },
    {
      label: 'Total',
      data: this.GastoTotal(),
      borderColor: '#6495ED',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderWidth: 2
    }
  ],
  
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
  

  return this.getChart(this.lineCanvas.nativeElement, 'line', data, options);
}



}

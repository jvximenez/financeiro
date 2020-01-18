import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';
import { HomePage } from '../home/home';
import { EditConfPage } from '../edit-conf/edit-conf';
import { EditPagamentoPage } from '../edit-pagamento/edit-pagamento';
import { EditAtalhoPage } from '../edit-atalho/edit-atalho';

/**
 * Generated class for the ConfiguraçõesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configurações',
  templateUrl: 'configurações.html',
})
export class ConfiguraçõesPage {

  
  public categorias;
  public pagamentos;
  public visuals;
  public atalhos;

  public categoria = {
    'title': '',
    'numero': '',
    'icon':'',

  };
  public pagamento ={
    'title': '',
    'numero':'',
    'icon':'',
  };

  public visual ={
    'ano':'',
    'mes':'',
    'final':'',
  }

  public atalho ={
    'title':'',
    'gasto':'',
    'categoria':'',
    'pagamento':'',
  }

  public ComprasArray
  public compras;



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dbService: FirebaseServiceProvider,
    public alertCtrl: AlertController) {

    this.categorias = this.dbService.getAllO('categoria',"numero").map(a=> a.reverse());
    this.pagamentos =  this.dbService.getAllO('pagamento',"numero").map(a=> a.reverse());
    this.visuals = this.dbService.getAll('visual')
    this.atalhos = this.dbService.getAll('atalho')


    

  }

  



  NovaCategoria(){
    const prompt = this.alertCtrl.create({
      title: 'Nova Categora',
      message: "Entre com o nome, número e icone da categoria",
      inputs: [
        {
          name: 'title',
          placeholder: 'Nome',

        },
        {
          name: 'numero',
          placeholder:"Número"
        },
        {
          name: 'icon',
          placeholder: "Ícone"
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Categoria',
          handler: data => {
            this.categoria.title = data.title, this.categoria.numero = data.numero, this.categoria.icon = data.icon;
            this.dbService.save('categoria',this.categoria);
            }
          },
        {
          text: 'Pagamento',
          handler: data => {
            this.pagamento.title = data.title, this.pagamento.numero = data.numero, this.pagamento.icon = data.icon;
            this.dbService.save('pagamento',this.pagamento);
            }
          }
      ]
    });
    prompt.present();
  }


  NovaVisual(){
    const prompt = this.alertCtrl.create({
      title: 'Nova Visualização',
      message: "Entre com ano e mes",
      inputs: [
        {
          name: 'ano',
          placeholder: 'Ano',
          type: 'number',

        },
        {
          name: 'mes',
          placeholder:"Mes",
          type: 'number',

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Adicionar',
          handler: data => {
            this.visual.ano = data.ano, this.visual.mes = data.mes, this.visual.final = ((data.ano) + (data.mes-1)/12);
            this.dbService.save('visual',this.visual);
            }
          }
      ]
    });
    prompt.present();
  }

  NovoAtalho(){
      const prompt = this.alertCtrl.create({
        title: 'Novo atalho',
        inputs: [
          {
            name: 'title',
            placeholder: 'Nome',
            type: 'text',
  
          },
          {
            name: 'Valor',
            placeholder:"Valor",
            type: 'number',
  
          },
          {
            name: 'Categoria',
            placeholder:"Categoria",
            type: 'text',
  
          },
          {
            name: 'Pagamentos',
            placeholder:"Pagamentos",
            type: 'text',
  
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Adicionar',
            handler: data => {
              this.atalho.title = data.title, this.atalho.gasto = data.Valor, this.atalho.categoria = data.Categoria, this.atalho.pagamento = data.Pagamentos;
              this.dbService.save('atalho',this.atalho);
              }
            }
        ]
      });
      prompt.present();
    }
  
  

  


  EditarCategoria(categoria){
    this.navCtrl.push(EditConfPage,
    {'categoria': categoria });
    console.log(categoria)
  }

  EditarPagamento(pagamento){
    this.navCtrl.push(EditPagamentoPage,
    {'pagamento': pagamento });
    
  }

  remove(a){
    this.dbService.revome('visual',a)
  }

  EditarAtalho(item){
    console.log(item,"uhu")
    this.navCtrl.push(EditAtalhoPage, {
      'atalho' : item })
  }


  AtualizaPag(){
    var contagem = 0 
    this.compras = (this.dbService.getAllQuantidade('compras',30)).map(a => a.reverse());
    this.ComprasArray = this.ArrayTotal()
    console.log(this.ComprasArray,"aqui")
    this.pagamentos.forEach(elements => {elements.forEach(element => {contagem = 0, contagem = Number(this.Conta(element.title)), element.numero= String(contagem),  this.dbService.update('pagamento', element)})})
  }
  

  Conta(nome){
    console.log(nome,"dfsd")
    var a = 0
    this.compras.forEach(todo => {console.log(todo,"oi", todo[1]); if(todo[1] == nome) {a+=1}})
    console.log(a)
    return a


  }


  ArrayTotal(){
    var linha = [];
    var coluna = []
    this.compras.forEach(itens => { itens.forEach( item => {linha = []; linha.push(item.title); linha.push(item.pagamento);linha.push(item.categoria); coluna.push(linha)})})
    return coluna

  }







  arrayCompras(compras){
    let array = []
    let linha = []
    compras.forEach( itens => itens.forEach(item => {linha = [], linha.push(item.payload,[item.ano,item.mes].join(' - '),item.categoria,item.pagamento,item.total), array.push(linha)}))
    
    return (array)
 
  }

  Inicio(){ 
    this.compras = (this.dbService.getAllQuantidade('compras',100))
    this.ComprasArray = this.arrayCompras(this.compras);
    this.categorias.forEach( itens => itens.forEach(item => {this.somaCat(item)}))
    this.pagamentos.forEach( itens => itens.forEach(item => {this.somaPag(item)}))
  }

  somaCat(categoria){
    var valorCat = 0 
    this.ComprasArray.forEach(item => {if (String(item[2]) == String(categoria.title)) {console.log('foi'), valorCat = valorCat + 1 }}
    );
    categoria.numero = Math.round(valorCat)
    this.dbService.update("categoria",categoria )
    return(Math.round(valorCat))
}
  somaPag(pagamento){
    var valorCat = 0 
    this.ComprasArray.forEach(item => {if (String(item[3]) == String(pagamento.title)) {console.log('foi'), valorCat = valorCat + 1 }}
    );
    pagamento.numero = Math.round(valorCat)
    this.dbService.update("pagamento",pagamento )
    return(Math.round(valorCat))
  }

  
}


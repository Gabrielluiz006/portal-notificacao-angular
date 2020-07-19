import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //variáveis responsáveis por redirecionar os componentes
  flagComponentHome: boolean = true;
  flagComponentLoja: boolean = false;
  flagComponentNotificacao: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  //lógica de redirecionamento de componentes
  alternarComponete(valor){
    //exibe componentes default ao carregar tela
    if(valor == 1){
      this.flagComponentHome = true;
      this.flagComponentLoja = false;
      this.flagComponentNotificacao = false;
    }
    
    //exibe componentes referentes a loja
    if(valor == 2){
      this.flagComponentLoja = true;
      this.flagComponentHome = false;
      this.flagComponentNotificacao = false;
    }

    //exibe componentes referentes a notificação
    if(valor == 3){
      this.flagComponentNotificacao = true;
      this.flagComponentLoja = false;
      this.flagComponentHome = false;
    }
  }


}

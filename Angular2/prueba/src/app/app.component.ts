import {Component, OnInit} from "@angular/core";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//ctrl + alt + l
export class AppComponent implements OnInit{
title:string = "Hola amigos";
  apellido:string="";
  nombre:string="";
  colorH4 ="red";
  tamanoH4 = "25px";

  nuevaTienda:any={};



   constructor(){
     this.apellido="Quito";
     this.nombre="Reyes";
     console.log("Inicio el constructor");
  }

  ngOnInit(){
    this.apellido="Reyes";
    this.nombre="Jelena";
  }

  nombreCompleto():string{
    return `${this.nombre} ${this.apellido}`
  }

  hizoClick(){
  console.log("hizoClick");
}
  hizoFocus(){
    console.log("hizoFocus");
  }
}





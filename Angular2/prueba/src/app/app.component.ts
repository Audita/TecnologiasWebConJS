import {Component, OnInit} from "@angular/core";
import {Response, Http} from "@angular/http";
import {MasterURLService} from "./services/master-url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// CTRL A +  -  CTRL + ALT + L
export class AppComponent implements OnInit {
  title: string = "Hola Amigos";
  nombre: string = "";
  apellido: string = "";
  colorH4 = "red";
  tamanoH4 = "52px";
  classes = "btn btn-block btn-success";
  error:string="No hay errores";
  nuevaTienda:any={};



  constructor(private http: Http,
              private _masterURL:MasterURLService) {
    this.apellido = "Quito";
    this.nombre = "Audita";
    console.log("Inicio el construcor")
  }

  ngOnInit() {
    this.apellido = "Reyes";
    this.nombre = "Jelena";
    console.log("On Init")
  }

  nombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`
  }

  hizoClick() {
    console.log("Hizo Click");
    console.log()
  }

  hizoFocus() {
    console.log("Hizo focus");
  }


  crearTienda(formulario){
    console.log(formulario);
    this.http.post(this._masterURL.url+"Tienda",{
      nombre:formulario.value.nombre
    }).subscribe(
      (res)=>{
        console.log("no hubo error");
        console.log(res);
        this.nuevaTienda ={}
      },
      (err)=>{
        console.log(" hubo error");
      },
    ()=>{
      console.log("Termino la funcion");
    }

  );
      //.post("http://localhost:1337/Tienda", formulario.valores)
     // .subscribe(
      //  res=>console.log('Respuesta: ',res),
       // err=>console.log('Error: ',err),
      //  ()=>{
         // console.log("Se completo la accion")
       // }
      //);
  }
}

import {Component, OnInit} from "@angular/core";
import {Response, Http} from "@angular/http";
import {Form, NgForm} from "@angular/forms";
import {MasterURLService} from "./services/master-url.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// CTRL A +  -  CTRL + ALT + L
export class AppComponent implements OnInit {
  title: string = "Bienvenido a Ingresar Tiendas";
  nuevaTienda = {};
  tiendas = [];
  disabledButtons = {
    NuevaTiendaFormSubmitButton: false
  };

  constructor(private _http: Http,
              private _masterURL: MasterURLService) {
  }

  ngOnInit() {

  }



}

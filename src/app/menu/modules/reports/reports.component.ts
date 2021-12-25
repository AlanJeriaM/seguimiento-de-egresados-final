import { Component } from '@angular/core';

interface MenuItem{
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent  {

  constructor() { }

menu: MenuItem[] = [
  {ruta: '/menu/reports/barra', texto: 'Capacitaciones'},
  {ruta: '/menu/reports/barra-doble', texto: 'Trabajos por año'},
  {ruta: '/menu/reports/dona', texto: 'Tecnologias más utilizadas'},
  {ruta: '/menu/reports/dona-http', texto: 'Dona Http'},
];


}

import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-pasos-encuesta',
  templateUrl: './pasos-encuesta.component.html',
  styleUrls: ['./pasos-encuesta.component.css']
})
export class PasosEncuestaComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Paso 1',
          routerLink: 'paso1'
      },
      {
          label: 'Paso 2',
          routerLink: 'paso2'
      },
      {
          label: 'Paso 3',
          routerLink: 'paso3'
      }
  ];
  }

}

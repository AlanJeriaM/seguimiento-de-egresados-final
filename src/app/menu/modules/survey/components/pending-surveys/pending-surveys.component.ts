import { Component, OnInit } from '@angular/core';

export interface Survey {
  position: number;
  name: string;
  date: string; // Poner tipo Date
  state: string;
}

const ELEMENT_DATA: Survey[] = [
  {position: 1, name: 'Titulo encuesta 1', date:'11/12/2021', state: 'Pendiente'},
  {position: 2, name: 'Titulo encuesta 2', date:'13/12/2021', state: 'Pendiente'},
  {position: 3, name: 'Titulo encuesta 3', date:'14/12/2021', state: 'Pendiente'},
  {position: 4, name: 'Titulo encuesta 4', date:'15/12/2021', state: 'Pendiente'},
  {position: 5, name: 'Titulo encuesta 5', date:'16/12/2021', state: 'Pendiente'},
  {position: 6, name: 'Titulo encuesta 6', date:'17/12/2021', state: 'Pendiente'},
  {position: 7, name: 'Titulo encuesta 7', date:'18/12/2021', state: 'Pendiente'},
  {position: 8, name: 'Titulo encuesta 8', date:'19/12/2021', state: 'Pendiente'},
  {position: 9, name: 'Titulo encuesta 9', date:'20/12/2021', state: 'Pendiente'}
  
];

@Component({
  selector: 'app-pending-surveys',
  templateUrl: './pending-surveys.component.html',
  styleUrls: ['./pending-surveys.component.css']
})
export class PendingSurveysComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'date','state', 'acciones'];
  dataSource = [...ELEMENT_DATA];

  ngOnInit(): void {
  }

}

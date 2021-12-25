import { Component, OnInit } from '@angular/core';

export interface Survey {
  position: number;
  name: string;
  date: string; // Poner tipo Date
  state: string;
}

const ELEMENT_DATA: Survey[] = [
  {position: 1, name: 'Titulo encuesta 1', date:'01/12/2021', state: 'Completada'},
  {position: 2, name: 'Titulo encuesta 2', date:'03/12/2021', state: 'Completada'},
  {position: 3, name: 'Titulo encuesta 3', date:'04/12/2021', state: 'Completada'},
  {position: 4, name: 'Titulo encuesta 4', date:'05/12/2021', state: 'Completada'},
  {position: 5, name: 'Titulo encuesta 5', date:'09/12/2021', state: 'Completada'},
  {position: 6, name: 'Titulo encuesta 6', date:'10/12/2021', state: 'Completada'},
  {position: 7, name: 'Titulo encuesta 7', date:'12/12/2021', state: 'Completada'},
  {position: 8, name: 'Titulo encuesta 8', date:'13/12/2021', state: 'Completada'},
  {position: 9, name: 'Titulo encuesta 9', date:'15/12/2021', state: 'Completada'}
  
];

@Component({
  selector: 'app-completed-surveys',
  templateUrl: './completed-surveys.component.html',
  styleUrls: ['./completed-surveys.component.css']
})
export class CompletedSurveysComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'date','state', 'acciones'];
  dataSource = [...ELEMENT_DATA];

  ngOnInit(): void {
  }

}

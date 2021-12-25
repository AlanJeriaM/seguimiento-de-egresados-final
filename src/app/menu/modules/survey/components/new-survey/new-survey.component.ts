import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface Survey {
  position: number;
  name: string;
  date: string; // Poner tipo Date
  state: string;
}

const ELEMENT_DATA: Survey[] = [
  {position: 1, name: 'Titulo encuesta 1', date:'18/12/2021', state: 'Nueva'},
  {position: 2, name: 'Titulo encuesta 2', date:'18/12/2021', state: 'Nueva'},
  {position: 3, name: 'Titulo encuesta 3', date:'18/12/2021', state: 'Nueva'},
  {position: 4, name: 'Titulo encuesta 4', date:'18/12/2021', state: 'Nueva'},
  {position: 5, name: 'Titulo encuesta 5', date:'18/12/2021', state: 'Nueva'},
  {position: 6, name: 'Titulo encuesta 6', date:'18/12/2021', state: 'Nueva'},
  {position: 7, name: 'Titulo encuesta 7', date:'18/12/2021', state: 'Nueva'},
  {position: 8, name: 'Titulo encuesta 8', date:'18/12/2021', state: 'Nueva'},
  {position: 9, name: 'Titulo encuesta 9', date:'18/12/2021', state: 'Nueva'}
  
];

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'date','state', 'acciones'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}








import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions, ChartType, } from 'chart.js';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 4, 4, 2, 3, 5, 1, 6 ], label: 'Egresado A' },
      { data: [ 2, 1, 4, 3, 2, 5, 4 ], label: 'Egresado B' },
      { data: [ 2, 2, 4, 5, 1, 2, 3 ], label: 'Egresado C' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

/*   public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[1].data = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
      ];

  }  */
}

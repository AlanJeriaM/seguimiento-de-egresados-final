import { Component} from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {

  constructor() { }

  public doughnutChartLabels: string[] = [ 'Angular', 'PHP', 'Laravel' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}

import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from 'src/app/services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ ] },
      { data: [ ] },
      { data: [ ] }

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
  

    this.graficasService.getUsuariosRedesSociales()
    .subscribe( data => {
      console.log(data);
      const labels = Object.keys( data );
      const valores = Object.values(data);
      this.doughnutChartLabels=labels;
      //this.doughnutChartData.push(valores); 
     



    });
  }
}

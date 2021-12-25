import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-graduate-reports',
  templateUrl: './graduate-reports.component.html',
  styleUrls: ['./graduate-reports.component.css']
})
export class GraduateReportsComponent implements OnInit {



  constructor(private router: Router) { }

  public getCurrentUrl(): string {
    if (this.router.url === '/menu/survey/reports/barra') return 'barra';
    if (this.router.url === '/menu/survey/reports/barra-doble') return 'barra-doble';
    if (this.router.url === '/menu/survey/reports/dona') return 'dona';
    if (this.router.url === '/menu/survey/reports/dona-ht') return 'dona-ht';
    return '';
  };

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports-screen',
  templateUrl: './reports-screen.component.html',
  styleUrls: ['./reports-screen.component.css']
})
export class ReportsScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public getCurrentUrl(): string {
    if (this.router.url === '/menu/reports/barra') return 'barra';
    if (this.router.url === '/menu/reports/barra-doble') return 'barra-doble';
    if (this.router.url === '/menu/reports/dona') return 'dona';
    if (this.router.url === '/menu/reports/dona-http') return 'dona-http';
    return '';
  };

}

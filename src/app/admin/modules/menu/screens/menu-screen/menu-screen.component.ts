import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-screen',
  templateUrl: './menu-screen.component.html',
  styleUrls: ['./menu-screen.component.css']
})
export class MenuScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public getCurrentUrl(): string {
    if (this.router.url === '/admin/menu/graduate-reports') return 'graduate-reports';
    if (this.router.url === '/admin/menu/reports') return 'reports';
    if (this.router.url === '/admin/menu/survey') return 'survey';
    if (this.router.url === '/admin/menu/user') return 'user';
    return '';
  };

}

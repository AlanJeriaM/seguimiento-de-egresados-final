import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-screen',
  templateUrl: './survey-screen.component.html',
  styleUrls: ['./survey-screen.component.css']
})
export class SurveyScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getCurrentUrl(): string {
    if (this.router.url === '/menu/survey/new') return 'new';
    if (this.router.url === '/menu/survey/pending') return 'pending';
    if (this.router.url === '/menu/survey/completed') return 'completed';
    if (this.router.url === '/menu/survey/reports') return 'reports';
    return '';
  };
}

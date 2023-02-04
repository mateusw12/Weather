import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-me',
  templateUrl: './help-me.component.html',
  styleUrls: ['./help-me.component.scss'],
})
export class HelpMeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onReturnClick(): void {
    this.router.navigate([`/menu`]);
  }
}

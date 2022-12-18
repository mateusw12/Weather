import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onReturnClick(): void {
    this.router.navigate([`/menu`]);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './circular-range.component.html',
  selector: 'app-circular-range',
})
export class CircularRangeComponent implements OnInit {
  @Input()
  invertRange: boolean = false;

  ngOnInit(): void {}
}
